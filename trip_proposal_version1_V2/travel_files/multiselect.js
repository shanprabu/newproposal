/*!
 * Multiselect v2.0.0
 * http://crlcu.github.io/multiselect/
 *
 * Copyright (c) 2015 Adrian Crisan
 * Licensed under the MIT license (https://github.com/crlcu/multiselect/blob/master/LICENSE)
 */
 ;(function (factory) {
   	if (typeof define === 'function' && define.amd) {
     	// AMD. Register as an anonymous module depending on jQuery.
     	define(['jquery'], factory);
   	} else {
    	// No AMD. Register plugin with global jQuery object.
    	factory(jQuery);
   	}
 }(function ($) {

 	var Multiselect = (function( $ ) {
		"use strict";
		
		/**	Multiselect object constructor
		 *
		 *	@class Multiselect
		 *	@constructor
		**/
		function Multiselect( $select, settings ) {
			if ( typeof $ != 'function' ) {
				throw "$ is undefined or not a function";
			}
			
			var id = $select.attr('id');
			this.left = $select;
			this.right = $( settings.right ).length ? $( settings.right ) : $('#' + id + '_to');
			this.actions = {
				leftAll: 		$( settings.leftAll ).length ? $( settings.leftAll ) : $('#' + id + '_leftAll'),
				rightAll: 		$( settings.rightAll ).length ? $( settings.rightAll ) : $('#' + id + '_rightAll'),
				leftSelected:	$( settings.leftSelected ).length ? $( settings.leftSelected ) : $('#' + id + '_leftSelected'),
				rightSelected:	$( settings.rightSelected ).length ? $( settings.rightSelected ) : $('#' + id + '_rightSelected'),

				undo:			$( settings.undo ).length ? $( settings.undo ) : $('#' + id + '_undo'),
				redo:			$( settings.redo ).length ? $( settings.redo ) : $('#' + id + '_redo')
			};
			
			delete settings.leftAll;
			delete settings.leftSelected;
			delete settings.right;
			delete settings.rightAll;
			delete settings.rightSelected;
			
			this.options = {
				keepRenderingSort: settings.keepRenderingSort
			};

			delete settings.keepRenderingSort;

			this.callbacks = settings;
			this.undoStack = [];
			this.redoStack = [];
			
			this.init();
		}
		
		Multiselect.prototype = {
			init: function() {
				var self = this;

				if (self.options.keepRenderingSort) {
					self.skipInitSort = true;

					self.callbacks.sort = function(a, b) {
						return $(a).data('position') > $(b).data('position') ? 1 : -1;
					};

					self.left.find('option').each(function(index, option) {
						$(option).data('position', index);
					});
				}

				if ( typeof self.callbacks.startUp == 'function' ) {
					self.callbacks.startUp( self.left, self.right );
				}
				
				if ( !self.skipInitSort && typeof self.callbacks.sort == 'function' ) {
					self.left.find('option').sort(self.callbacks.sort).appendTo(self.left);
					self.right.find('option').sort(self.callbacks.sort).appendTo(self.right);
				}
				
				self.events( self.actions );
			},
			
			events: function( actions ) {
				var self = this;
				
				self.left.on('dblclick', 'option', function(e) {
					e.preventDefault();
					if($('select#undo_redo_to option').length <2 ) {
					self.moveToRight(this);
					} else {
						alert("Sorry! Trigger limit reached max:2");
					}
				});
				
				self.right.on('dblclick', 'option', function(e) {
					e.preventDefault();
					self.moveToLeft(this);
				});
				
				// dblclick support for IE
				if ( navigator.userAgent.match(/MSIE/i)  || navigator.userAgent.indexOf('Trident/') > 0 || navigator.userAgent.indexOf('Edge/') > 0) {
					self.left.dblclick(function(e) {
						actions.rightSelected.trigger('click');
					});
					
					self.right.dblclick(function(e) {
						actions.leftSelected.trigger('click');
					});
				}
				
				actions.rightSelected.on('click', function(e) {
					e.preventDefault();
					var options = self.left.find('option:selected');
					if ( options ) {
						var rt = self.left.find('option:selected').length;
						var lt = $('select#undo_redo_to option').length ;
						//console.log(JSON.stringify(options));
						if(($('select#undo_redo_to option').length < 2) && ((rt+lt) <=2)) {					
							self.moveToRight(options);
						} else {
							alert("Sorry! Trigger limit set, max:2");	
						}
					}

					$(this).blur();
				});
				
				actions.leftSelected.on('click', function(e) {
					e.preventDefault();
					var options = self.right.find('option:selected');
					var opt = $('#undo_redo_to option:selected').val();
                                        
					//alert(opt.val());
					if ( options ) {
						self.moveToLeft(options);
                                                if($('form#cust-form-update').length > 0) {
                                                    console.log("Custom edit form found");
                                                    $( "div.update_container" ).find("div#"+opt).remove();
                                                    $('#trigger_desc_det').data("wysihtml5").editor.setValue($( "div.update_container" ).html());
                                            }
					}

					$(this).blur();
				});
				
				actions.rightAll.on('click', function(e) {
					e.preventDefault();
					var options = self.left.find('option');
					
					if ( options ) {
						var rt = self.left.find('option').length;
						var lt = $('select#undo_redo_to option').length ;
						//console.log(JSON.stringify(options));
						if(($('select#undo_redo_to option').length < 2) && ((rt+lt) <=2)) {	
						self.moveToRight(options);
						} else {
							alert("Sorry! Trigger limit set, max:2");	
						}
					}

					$(this).blur();
				});
				
				actions.leftAll.on('click', function(e) {
					e.preventDefault();
					
					var options = self.right.find('option');
					
					if ( options ) {
						self.moveToLeft(options);
					}

					$(this).blur();
				});

				actions.undo.on('click', function(e) {
					e.preventDefault();

					self.undo();
				});

				actions.redo.on('click', function(e) {
					e.preventDefault();

					self.redo();
				});
			},
			
			moveToRight: function( options, silent, skipStack ) {
				var self = this;
				
				if ( typeof self.callbacks.beforeMoveToRight == 'function' && !silent ) {
					if ( !self.callbacks.beforeMoveToRight( self.left, self.right, options ) ) {
						return false;
					}
				}
				
				self.right.append(options);
                               // console.log(options);

				if ( !skipStack ) {
					self.undoStack.push(['right', options ]);
					self.redoStack = [];
				}
				
				if ( typeof self.callbacks.sort == 'function' && !silent ) {
					self.right.find('option').sort(self.callbacks.sort).appendTo(self.right);
				}
				
				if ( typeof self.callbacks.afterMoveToRight == 'function' && !silent ){
					self.callbacks.afterMoveToRight( self.left, self.right, options );
				}
				
				return self;
			},
			
			moveToLeft: function( options, silent, skipStack ) {
				var self = this;
				
				if ( typeof self.callbacks.beforeMoveToLeft == 'function' && !silent ) {
					if ( !self.callbacks.beforeMoveToLeft( self.left, self.right, options ) ) {
						return false;
					}
				}
					
				self.left.append(options);
				
				if ( !skipStack ) {
					self.undoStack.push(['left', options ]);
					self.redoStack = [];
				}
				
				if ( typeof self.callbacks.sort == 'function' && !silent ) {
					self.left.find('option').sort(self.callbacks.sort).appendTo(self.left);		
				}
				
				if ( typeof self.callbacks.afterMoveToLeft == 'function' && !silent ) {
					self.callbacks.afterMoveToLeft( self.left, self.right, options );
				}
				
				return self;
			},

			undo: function() {
				var self = this;
				var last = self.undoStack.pop();

				if ( last ) {
					self.redoStack.push(last);

					switch(last[0]) {
						case 'left':
							self.moveToRight(last[1], false, true);
							break;
						case 'right':
							self.moveToLeft(last[1], false, true);
							break;
					}
				}
			},
			redo: function() {
				var self = this;
				var last = self.redoStack.pop();

				if ( last ) {
					self.undoStack.push(last);

					switch(last[0]) {
						case 'left':
							self.moveToLeft(last[1], false, true);
							break;
						case 'right':
							self.moveToRight(last[1], false, true);
							break;
					}
				}
			}
		}
		
		return Multiselect;
	})( jQuery );
	
	$.multiselect = {
		defaults: {
			/**	will be executed once - remove from $left all options that are already in $right
			 *
			 *	@method startUp
			**/
			startUp: function( $left, $right ) {
				$right.find('option').each(function(index, option) {
					$left.find('option[value="' + option.value + '"]').remove();
				});
			},

			/**	will be executed each time before moving option[s] to right
			 *  
			 *	IMPORTANT : this method must return boolean value
			 *      true    : continue to moveToRight method
			 *      false   : stop
			 * 
			 *  @method beforeMoveToRight
			 *  @attribute $left jQuery object
			 *  @attribute $right jQuery object
			 *  @attribute options HTML object (the option[s] which was selected to be moved)
			 *  
			 *  @default true
			 *  @return {boolean}
			**/
			beforeMoveToRight: function($left, $right, options) { return true; },

			/*	will be executed each time after moving option[s] to right
			 * 
			 *  @method afterMoveToRight
			 *  @attribute $left jQuery object
			 *  @attribute $right jQuery object
			 *  @attribute options HTML object (the option[s] which was selected to be moved)
			**/
			afterMoveToRight: function($left, $right, options){
				var self = this;
                                var values = [];      
                                $right.find('option').each(function(index, option) {
                                                    option.selected = true;
                                                    //console.log(option.value);
                                                    values.push(option.value);
                                });

                                self.trigger_get(values);

                        },

			/**	will be executed each time before moving option[s] to left
			 *  
			 *	IMPORTANT : this method must return boolean value
			 *      true    : continue to moveToRight method
			 *      false   : stop
			 * 
			 *  @method beforeMoveToLeft
			 *  @attribute $left jQuery object
			 *  @attribute $right jQuery object
			 *  @attribute options HTML object (the option[s] which was selected to be moved)
			 *  
			 *  @default true
			 *  @return {boolean}
			**/
			beforeMoveToLeft: function($left, $right, option){ return true; },

			/*	will be executed each time after moving option[s] to left
			 * 
			 *  @method afterMoveToLeft
			 *  @attribute $left jQuery object
			 *  @attribute $right jQuery object
			 *  @attribute options HTML object (the option[s] which was selected to be moved)
			**/
			afterMoveToLeft: function($left, $right, option){
				var self = this;
				var values = [];
				$right.find('option').each(function(index, option) {
					option.selected = true;
					//console.log(option.value);
					values.push(option.value);
				});
				console.log("moved to left now"+ option.value);

				var opt_v = option.value;
				if($('form#cust-form-update').length > 0) {
                                        console.log("Custom edit form found");
                                        $( "div.update_container" ).find("div#"+opt_v).remove();
                                        $('#trigger_desc_det').data("wysihtml5").editor.setValue($( "div.update_container" ).html());
                                }
               
				 self.trigger_get(values);
			},
			trigger_get: function(trigger_opt){
				//$.each(trigger_opt,function(index, option) {
					//console.log(option);
					//values.push(option.value);
				//});
				if($('form#cust-form').length > 0 && trigger_opt != "") {
					//console.log("New form found");
					$.ajax({
                                    url: $("form#cust-form").attr('action'),
                                    cache: false,
                                    type: 'POST',
                                    data: 'action=triggerpage_data&postid='+trigger_opt,
                                    dataType: 'html',
                                    success: function( data ) {  
                                            //console.log(data);
                                            $('div.trigger_editor').show();
                                            $('#trigger_desc_det').data("wysihtml5").editor.setValue(data);
                                    },
                                    error: function() {
                                            console.log( 'AJAX Error' );                        
                                    }
                                    });
				} else {
					//console.log("no form found or not trigger selected")
					if($('form#cust-form').length > 0 ){
					$('#trigger_desc_det').data("wysihtml5").editor.setValue('');
					}
				}

				if($('form#cust-form-update').length > 0 && trigger_opt != "") {
					//console.log("Update form found");
					var pIDs = [];
					$( "div.update_container" ).find("div").each(function(){ pIDs.push(this.id); });
						var difference_trig_id = [];

						jQuery.grep(pIDs, function(el) {
						        if (jQuery.inArray(el, trigger_opt) == -1) difference_trig_id.push(el);
						});

						var unified=[];           
						jQuery.grep(trigger_opt, function(el) {
						        if (jQuery.inArray(el, pIDs) == -1) unified.push(el);
						});
						console.log(unified);
						console.log(difference_trig_id);

					if(unified.length > 0) {	
							$.ajax({
				                url: $("form#cust-form-update").attr('action'),
				                cache: false,
				                type: 'POST',
				                data: 'action=triggerpage_data&postid='+unified,
				                dataType: 'html',
				                success: function( data ) {  
				               		//console.log(data);
				               		if($('div.update_container').children().length > 0) {
				               		var prev = $('div.update_container').html() + data;
				               		} else {
				               		var prev = data;	
				               		}

				               		$('#trigger_desc_det').data("wysihtml5").editor.setValue(prev);
				                },
				                error: function() {
				                        console.log( 'AJAX Error' );                        
				                }
			       			});
					}
				} else {
					//console.log("no form found or not trigger selected");
					if($('form#cust-form-update').length > 0 ){
					$('#trigger_desc_det').data("wysihtml5").editor.setValue('');
					}
				}
			},

			/**	sort options by option text
			 * 
			 *  @method sort
			 *  @attribute a HTML option
			 *  @attribute b HTML option
			 *
			 *  @return 1/-1
			**/
			sort: function(a, b) {
				if (a.innerHTML == 'NA') {
					return 1;   
				} else if (b.innerHTML == 'NA') {
					return -1;   
				}
				
				return (a.innerHTML > b.innerHTML) ? 1 : -1;
			}
		},
		setup: {}
	}
    
    $.fn.multiselect = function( options ) {
        return this.each(function() {
			var $this = $(this),
				data = $this.data();
			
			var settings = $.extend({}, $.multiselect.defaults, $.multiselect.setup, data, options);
			
            return new Multiselect($this, settings);
        });  
    };
 }));