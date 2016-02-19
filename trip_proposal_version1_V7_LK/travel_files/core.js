/**
 * Core JavaScript
 *
 * @package    Enchanting_Travelmaker
 * @author     Junaid Bhura
 * @copyright  www.junaidbhura.com
 */

/*-----------------------------------------------------------------------------------*/
/*	Global Variables
/*-----------------------------------------------------------------------------------*/
// Set Picasa Account ID from which to load Album IDs
var picasa_account_id = '102615031600923491429';

/*-----------------------------------------------------------------------------------*/
/*	Dropdown Menu
/*-----------------------------------------------------------------------------------*/
var dropdown_timeout = 500;
var dropdown_close_timer = 0;
var dropdown_menu_item = 0;

function dropdown_open() {
    
	dropdown_canceltimer();
	dropdown_close();
	dropdown_menu_item = $( this ).find( 'ul' ).css( 'visibility', 'visible' );

	if ( $( this ).find( 'ul' ).length != 0 ) {
		$( this ).addClass( 'active' );
		hide_header_boxes();
	}
}

function dropdown_close() {
	if ( dropdown_menu_item ) {
		dropdown_menu_item.css( 'visibility', 'hidden' );
		$( '#nav li' ).removeClass( 'active' );
	}
}

function dropdown_timer() {
	dropdown_close_timer = window.setTimeout( dropdown_close, dropdown_timeout );
}

function dropdown_canceltimer() {
	if ( dropdown_close_timer ) {
		window.clearTimeout( dropdown_close_timer );
		dropdown_close_timer = null;
	}
}

function hide_header_boxes() {
	$( 'header .contact-dropdown' ).fadeOut( 'fast' );
	$( '#nav li a.contact' ).parent().removeClass( 'stay-active' );

	$( '#facebook-search .search-box' ).fadeOut( 'fast' );
	$( '#facebook-search .search a' ).removeClass( 'active' );
}

// Add class last for last submenu item
$( '#nav ul' ).each(function() {
	$( this ).find( 'li' ).last().addClass( 'last' );
});

$( '#nav > li' ).bind( 'mouseover', dropdown_open );
$( '#nav > li' ).bind( 'mouseout',  dropdown_timer );

/*-----------------------------------------------------------------------------------*/
/*	Header
/*-----------------------------------------------------------------------------------*/
/* Location Flags */
if ( $( '#filter-form' ).length === 0 ) {
	// Hack for CA, UK and Australia
	$( '#call-location .other-locations a' ).click(function() {
		if ( $( this ).is( '.ca' ) || $( this ).is( '.uk' ) || $( this ).is( '.au' ) ) {
			// Check if locale is en_US
			if ( locale == 'en_US' ) {
				// Set a hijack cookie
				$.cookie( 'enchanting_location_hijack', $( this ).attr( 'class' ), { path: '/' } );
			}
		}
		else {
			// Not UK or AU, disable hijack cookie if it exists
			if ( $.cookie( 'enchanting_location_hijack' ) != undefined && $.cookie( 'enchanting_location_hijack' ) != 'undefined' && $.cookie( 'enchanting_location_hijack' ) != '' )
				$.cookie( 'enchanting_location_hijack', '', { path: '/' } );
		}
	});

	// Check for hijack cookie
	if ( $.cookie( 'enchanting_location_hijack' ) != undefined && $.cookie( 'enchanting_location_hijack' ) != 'undefined' && $.cookie( 'enchanting_location_hijack' ) != '' ) {
		// Change main flag to location flag
		$( '#call-location .location' ).find( 'span' ).attr( 'class', $.cookie( 'enchanting_location_hijack' ) );

		// Change location flag to American, and move it up
		$( '#call-location .other-locations a.' + $.cookie( 'enchanting_location_hijack' ) ).attr( 'class', 'us' );
		if ( $( '#call-location .other-locations a.us' ).parent().index() > 0 )
			$( '#call-location .other-locations a.us' ).parent().insertBefore( '#call-location .other-locations li:first-child' );
	}
}

/* Search Form */
$( '#facebook-search .search a' ).click(function() {
	$( this ).addClass( 'active' );
	$( '#facebook-search .search-box' ).fadeIn( 'fast' );

	return false;
});

$( document ).mouseup(function( e ) {
	if ( $( '#facebook-search .search-box' ).has( e.target ).length === 0 ) {
		$( '#facebook-search .search-box' ).fadeOut( 'fast' );
		$( '#facebook-search .search a' ).removeClass( 'active' );
	}
});

/* Location Flags */
$( '#call-location .location' ).click(function() {
	if ( $( '#call-location .other-locations' ).css( 'display' ) == 'block' ) {
		$( '#call-location .other-locations' ).fadeOut( 'fast' );
		$( this ).addClass( 'selected' );
	}
	else {
		$( this ).removeClass( 'selected' );
		$( '#call-location .other-locations' ).fadeIn( 'fast' );
	}

	return false;
});

$( document ).mouseup(function( e ) {
	if ( $( '#call-location .other-locations' ).has( e.target ).length === 0 ) {
		$( '#call-location .other-locations' ).fadeOut( 'fast' );
		$( '#call-location .location' ).addClass( 'selected' );
	}
});

/*-----------------------------------------------------------------------------------*/
/*  Search Filters
/*-----------------------------------------------------------------------------------*/
if ( $( '#filter-form' ).length !== 0 ) {
	// Tooltips
	$( '#filter-form .glyphicon-info-sign' ).tooltip({ container: 'body' });

	// Reset form on load
	$( '#filter-form' )[0].reset();
	
	// Reset form event
   
	
	$( '#filter-form input[type=hidden]' ).each(function() {
		$( this ).prop( 'value', '' );
	});
	
        
        function proceedResult(data,type){            
            
                $( '#results' ).html();
                $( '.sort .total_result_found' ).html( '<label>' + data.total_results_found + ' Search Results</label>');				
                
                // Prepare results
                var results = '';               
                var template = $( '#results-template' ).html();
                //alert(template);
                for ( i = 0; i < data.results_found; i ++ ) {
                        result = template;
                        result = result.replace( '$count', i + 1 + ((data.post_string.current_page-1)*10 ));
                        $.each( data.results[ i ], function( key, value ) {
                                if ( key == 'listing_image' && value == '' ){
                                        value = template_url + '/assets/images/search/default-new.png';
                                }
                                if(key=='rating' && value!=''){
                                        //alert(value);
                                }

                                result = result.replace( '$' + key, value );
                        });

                        results += result;
                };

                if(type=='first'){
                     $( '#results' ).html(results);
                }else{
                    $( '#results' ).append(results);
                }
                
              	$('#results .price').hide();
                var curr ='';
                if ($(".flag-wrap input").val()!='') {
                        curr = $.trim($(".flag-wrap input").val().toLowerCase());
                }else{
                        curr = 'usd';
                }
			
				var lang ='';
                if ($(".lang-wrap input").val()!='') {
                        lang = $.trim($(".lang-wrap input").val().toLowerCase());
                }else{
                        lang = 'en';
                }
			
                $('#results .' + curr).show();
                var poststr = '';
                var total_page = 0;
                var current_page = 0;
                
                $.each(data.post_string, function (i, field) {
                    $('[name="'+field+'"]').addClass('form_err');
                    if(field!=''){
                        if(i=='total_page'){
                            total_page = field;
                        }
                        if(i=='current_page'){
                            current_page = field;
                        }
                        if(i=='country' || i=='interests' || i=='regions'){                           
                       
                           $.each(field, function (j, val) {
                              poststr += i+'[]='+val+'&';
                           });                         
                            
                        }else{
                            poststr += i+'='+field+'&';
                        }
                    }

                });              
                if(data.total_results_found > 10){
                    $(".showmorecontainer").html('<button class="load_more col-md-12" onClick="getMoreResults(\'' + poststr + '\','+current_page +',' + total_page + ')" id="load_more_button">load More</button><div class="animation_image col-md-12" style="display:none;"><img src="../wp-content/themes/travelmaker/ajax-loader.gif"> Loading...</div>');
                }else{                    
                    $(".showmorecontainer").html('');
                }
        }
	
	// Form submit event
	$( '#filter-form' ).on( 'submit', function( event ) {
                
		event.preventDefault();
                $( '.sort .total_result_found' ).html('');
                $(".showmorecontainer .load_more").hide();
                if($(".flag-wrap input").val()!=''){                    
                    var currency = $.trim($(".flag-wrap input").val());
					
                }else{                    
                    var currency = "USD";
                }
		
				if($(".lang-wrap input").val()!=''){                    
                    var lang = $.trim($(".lang-wrap input").val());
					
                }else{                    
                    var lang = "en";
                }
		
		
		if ( $( '#dd4 div' ).text() !='Sort By' &&  $( '#dd4 div' ).text()!='')
			var sorted = $( '#dd4 div' ).text();
			if($( '#dd4 div' ).text()=='Ascending'){
				var sorted = "asc";
			}else if($( '#dd4 div' ).text()=='Decending'){
				var sorted = "desc";
			}else if($( '#dd4 div' ).text()=='Price - High to Low'){
				var sorted = "price desc";
			}else if($( '#dd4 div' ).text()=='Price - Low to High'){
				var sorted = "price asc";
			}
		else
			var sorted = 'asc';

		//alert($( '#dd4 div' ).text());		

		$( '#results' ).html( '<h3>Loading Results...</h3>' );

		$( 'html, body' ).animate({
			scrollTop: 0
		}, 500 );
                
                var current_page = 0;
                
                var go_to_func = $( "#go_to_func" ).val();
                
		$.ajax({
			url: $( this ).attr( 'action' ),
			cache: false,
			type: 'POST',
			//data: $( this ).serialize()+'&current_page='+current_page+'&currency='+currency+'&lang='+lang+'&action=travelmaker_search&sort='+sorted,
			data: $( this ).serialize()+'&current_page='+current_page+'&currency='+currency+'&lang='+lang+'&action='+go_to_func+'&sort='+sorted,
			dataType: 'json',
			success: function( data ) {
				// Show title
				if ( data.status == 'error' ) {
					$( '#results' ).html( '<h3>Error: ' + data.message + '</h3>' );
					return;
				}
				if ( data.status == 'success' && data.results_found === 0  ) {
					$( '.sort .total_result_found' ).html('');
					$('#results').html( '<h3>No results found</h3>' );
					return;
				}else{                              
                               
                                 proceedResult(data,'first');  
                                 
                                }
                               
				
			
			},
			error: function() {
				alert( 'AJAX Error' );
				$( '#results .sort' ).html( '' );
			}
		});
	});
        
        function getMoreResults(post_string,current_page,total_page) { //user clicks on button
              
               
		$(".showmorecontainer .load_more").hide(); //hide load more button on click
                $(".showmorecontainer .animation_image").show();                 
               
		if(current_page < total_page) //make sure user clicks are still less than total pages
		{   
			//post page number and load returned data into result element
                        $('.animation_image').show(); //show loading image
                       
			$.ajax({
                            url:  $("form#filter-form").attr('action'),
                            cache: false,
                            type: 'POST',
                            data: post_string,
                            dataType: 'json',
                            success: function( data ) {                                   
                                   
                                   proceedResult(data,'',total_page);
                                   
                                    if(current_page >= total_page-1){                                           
                                           //reached end of the page yet? disable load button
                                            $(".showmorecontainer .load_more").hide(); //hide load more button on click
                                            $(".showmorecontainer .animation_image").hide(); 
                                    }else{
                                        $(".showmorecontainer .load_more").show(); //hide load more button on click
                                        $(".showmorecontainer .animation_image").hide();
                                    }
                                   
                                  
                            },
                            error: function() {
                                    alert( 'AJAX Error' );
                                    
                            }
                        });
			
			
		 }
                 
                
		 
        };
                
                
	$( '.btn-primary' ).click(function() {
               
		$( '#dd4 div' ).text('Sort By');                    
                $( '#filter-form' ).submit();
	});
        
        $( '.btn-danger' ).click(function() {
               
               
                $('.collapse').each(function(){
                    if ($(this).hasClass('in')) {                      
                        $(this).collapse('toggle');
                    }
                });
                
                $('.panel-title').each(function(){
                    if ($(this).hasClass('active')) {                      
                        $(this).removeClass('active');
                    }
                });
                
                
               
               
               
		$( '#dd4 div' ).text('Sort By');		
                $('#filter-form input[type=hidden],input[type=textbox]').each(function() {
                    $(this).prop('value', '');
                });
                $( '#filter-form' )[0].reset();
                $('#filter-form .results .result').remove();	
                $('#dd1 div').html('Duration');
                $('#dd2 div').html('Price per person');
                $(".flag-dropdown li").css('display','none');
                $fl = $("ul.flag-dropdown li.us");
                $("ul.flag-dropdown").prepend($fl);
                $(".flag-dropdown li.us").css('display','list-item');
                $(".flag-wrap input").val('USD');
                $(".lang-dropdown li").css('display','none');
                $cl = $("ul.lang-dropdown li.en");
                $("ul.lang-dropdown").prepend($cl);
                $(".lang-dropdown li.en").css('display','list-item');
                $(".lang-dropdown input").val('en');
                $('#dd3 div').html('Currency');                 
                $('.content-right .sort-result').hide();
                $('.content-right .slide').show();
                $('#accordion .checkbox').show();
                $("#accordion .checkbox label").removeClass("selected");
                $('.collapse').collapse();
                
	});
	
	
	
        
        
        
        
        
	document.onkeydown=function(evt){
        var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
        if(keyCode == 13)
        {
            $( '#dd4 div' ).text('Sort By');
            $('#carousel-right').hide();			
            $('.sort-result').show();           
            $( '#filter-form' ).submit();
			   
        }
    }
	

	// Autocomplete
    if ($('#filter-form .autocomplete').length !== 0) {
        var title = new Array();
        var shortdescription = new Array();
        var cityactivity = new Array();
        var cityhighlights = new Array();
        var populartags = new Array();
        var city = new Array();
        var hotel = new Array();
        var citycontent = new Array();
		
		 $('#filter-form .autocomplete2').each(function(index) {
            // Get data from source
            var type = $(this).attr('data-name');
            city[ index ] = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: $('#filter-form').attr('action') + '?search=%QUERY&action=travelmaker_autocomplete&result=city&type=' + type,
                limit: 10
            });
            city[ index ].initialize();


            hotel[ index ] = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: $('#filter-form').attr('action') + '?search=%QUERY&action=travelmaker_autocomplete&result=hotel&type=' + type,
                limit: 10
            });
            hotel[ index ].initialize();

            /* citycontent[ index ] = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: $('#filter-form').attr('action') + '?search=%QUERY&action=travelmaker_autocomplete&result=citycontent&type=' + type,
                limit: 10
            });
            citycontent[ index ].initialize();
			*/
			 
			// Initialize autocomplete
            $(this).typeahead({
                hint: false,
                highlight: true,
                minLength: 1
            },
           {
                name: 'city',
                displayKey: 'value',
                source: city[ index ].ttAdapter(),
                templates: {
                    header: '<h3 class="group-title">City</h3>'
                }
            },
            {
                name: 'hotel',
                displayKey: 'value',
                source: hotel[ index ].ttAdapter(),
                templates: {
                    header: '<h3 class="group-title">Hotel</h3>'
                }
            
		   	/*				  
            {
                name: 'citycontent',
                displayKey: 'value',
                source: citycontent[ index ].ttAdapter(),
                templates: {
                    header: '<h3 class="group-title">City descriptions</h3>'
                }
				*/
            });
			
			
							  
			
            // On Selected event
            $(this).on('typeahead:selected', function(value) {
                var results = $(this).parent().parent().find('.autocomplete-results');
                var original_value = $(this).typeahead('val');
                var new_value = original_value + ',';

                // Reset the value of autocomplete
                $(this).typeahead('val', '');

                // Check if value already exists
                if (results.val().indexOf(new_value) > -1)
                    return;

                // Value doesn't exist, add it and create a tag
                results.prop('value', results.val() + new_value);
                $(this).parent().parent().find('.results').append('<span class="result"><span class="glyphicon glyphicon-minus-sign"></span><span>' + original_value + '</span></span>');

                // Remove tag event
                $(this).parent().parent().find('.results .glyphicon').click(function() {
                    var results = $(this).parent().parent().parent().find('.autocomplete-results');
                    
                    if (results.length !== 0){
                       
                        results.prop('value', results.prop('value').replace($(this).next('span').text() + ',', ''));
                    }

                    $(this).unbind('click').parent().remove();
                    return false;
                });
            });
        });				  
							  
			 
			 

        $('#filter-form .autocomplete1').each(function(index) {
            // Get data from source
            var type = $(this).attr('data-name');
            
            title[ index ] = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: $('#filter-form').attr('action') + '?search=%QUERY&action=travelmaker_autocomplete&result=title&type=' + type,
                limit: 10
            });
            title[ index ].initialize();


            cityactivity[ index ] = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: $('#filter-form').attr('action') + '?search=%QUERY&action=travelmaker_autocomplete&result=cityactivity&type=' + type,
                limit: 10
            });
            cityactivity[ index ].initialize();

           
            populartags[ index ] = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: $('#filter-form').attr('action') + '?search=%QUERY&action=travelmaker_autocomplete&result=populartags&type=' + type,
                limit: 10
            });
            populartags[ index ].initialize();

           

            // Initialize autocomplete
            $(this).typeahead({
                hint: false,
                highlight: true,
                minLength: 1
            },
            {
                name: 'Title',
                displayKey: 'value',
                source: title[ index ].ttAdapter(),
                templates: {
                    header: '<h3 class="group-title">Title</h3>'
                }
            },
            {
                name: 'cityactivity',
                displayKey: 'value',
                source: cityactivity[ index ].ttAdapter(),
                templates: {
                    header: '<h3 class="group-title">City activity</h3>'
                }
            },
           
            {
                name: 'populartags',
                displayKey: 'value',
                source: populartags[ index ].ttAdapter(),
                templates: {
                    header: '<h3 class="group-title">Popular tags</h3>'
                }
            }
           );
			
			
		

            // On Selected event
            $(this).on('typeahead:selected', function(value) {
                var results = $(this).parent().parent().find('.autocomplete-results');
                var original_value = $(this).typeahead('val');
                var new_value = original_value + ',';

                // Reset the value of autocomplete
                $(this).typeahead('val', '');

                // Check if value already exists
                if (results.val().indexOf(new_value) > -1)
                    return;

                // Value doesn't exist, add it and create a tag
                results.prop('value', results.val() + new_value);
                $(this).parent().parent().find('.results').append('<span class="result"><span class="glyphicon glyphicon-minus-sign"></span><span>' + original_value + '</span></span>');

                // Remove tag event
                $(this).parent().parent().find('.results .glyphicon').click(function() {
                    var results = $(this).parent().parent().parent().find('.autocomplete-results');
                   
                    if (results.length !== 0){
                        //results.prop('value', results.prop('value').replace($(this).next('span').text() + ',', ''));
                        results.prop('value', results.prop('value').replace($(this).next('span').text().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,'&gt;').replace(/"/g, '&quot;') + ',', ''));
                    }
                    $(this).unbind('click').parent().remove();
                    return false;
                });
            });
        });

        var suggestions = new Array();
        $('#filter-form .autocomplete').each(function(index) {
// Get data from source
            var type = $(this).attr('data-name');
            suggestions[ index ] = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: $('#filter-form').attr('action') + '?search=%QUERY&action=travelmaker_autocomplete&type=' + type,
                limit: 10
            });
            suggestions[ index ].initialize();
// Initialize autocomplete
            $(this).typeahead({
                hint: false,
                highlight: true,
                minLength: 1
            },
            {
                name: 'suggestions',
                displayKey: 'value',
                source: suggestions[ index ].ttAdapter()
            });
// On Selected event
            $(this).on('typeahead:selected', function(value) {
                var results = $(this).parent().parent().find('.autocomplete-results');
                var original_value = $(this).typeahead('val');
                var new_value = original_value + ',';
// Reset the value of autocomplete
                $(this).typeahead('val', '');
// Check if value already exists
                if (results.val().indexOf(new_value) > -1)
                    return;
// Value doesn't exist, add it and create a tag
                results.prop('value', results.val() + new_value);
                $(this).parent().parent().find('.results').append('<span class="result"><span class="glyphicon glyphicon-minus-sign"></span><span>' + original_value + '</span></span>');
// Remove tag event
                $(this).parent().parent().find('.results .glyphicon').click(function() {
                    
                    var results = $(this).parent().parent().parent().find('.autocomplete-results');
                    
                    if (results.length !== 0){
                        results.prop('value', results.prop('value').replace($(this).next('span').text().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,'&gt;').replace(/"/g, '&quot;') + ',', ''));
                    }
                    
                    $(this).unbind('click').parent().remove();
                    return false;
                });
            });
        });

    }
}




/*-----------------------------------------------------------------------------------*/
/*  Custom data add
 /*-----------------------------------------------------------------------------------*/
if ($('#cust-form').length !== 0) {
    
    
    $('#cust-form').on('submit', function(event) {        
        event.preventDefault();
        $myformdata = $(this).serialize();
        $myformaction = $(this).attr('action');
        $busy_button = $(this).find('button[type="submit"]');
        if(($('select#cost_sel_category').val() == 0) && ($('input#deal_id').val().length === 0)) {
            alert("1.Please enter the deal id. \n2.Please select an option for 'Cost Selection Category' on the Basic tab.");
        return false;
        } else if($('select#cost_sel_category').val() == 0) {
            alert("Please select an option for 'Cost Selection Category' on the Basic tab");
        return false;
        } else if($('input#deal_id').val().length === 0) {
            alert("Please enter the deal id");
        return false;
        } else {
            $busy_button.addClass('busy_on');
             $.ajax({
            url: $(this).attr('action'),
            cache: false,
            type: 'POST',
            data: 'deal_id='+$('input#deal_id').val() + '&action=is_deal_id_exist',
            dataType: 'json',
            success: function(data) {
                // Show title
                if (data.status == 'error') {
                    $busy_button.removeClass('busy_on');
                    alert("Please enter valid deal id");
                    return false;
                } else {
                            $("select#undo_redo_to option").prop("selected", "selected");

                            $.ajax({
                                url: $myformaction,
                                cache: false,
                                type: 'POST',
                                data: $myformdata + '&action=custompage_data',
                                dataType: 'json',
                                success: function(data) {
                                    // Show title
                                    if (data.status === 'error') {
                                        $('#err').html('<h3>Error: ' + data.message + '</h3>');
                                        return;
                                    }
                                    else {
                                        window.location.href = data.url;
                                        return;
                                    }

                                },
                                error: function() {
                                    alert('AJAX Error');
                                    $busy_button.removeClass('busy_on');
                                    $('#results').html('');
                                }
                            });
                }
            },
            error: function() {
                alert('AJAX Error');
                $busy_button.removeClass('busy_on');
                $('#results').html('');
            }
            });
        }

    });
}

if ($('#cust-form-update').length !== 0) {
    
    $("select#undo_redo_to option").prop("selected", "selected");
    $('#cust-form-update').on('submit', function(event) {
        event.preventDefault();
        $myformdata = $(this).serialize();
        $busy_button = $(this).find('button[type="submit"]');
        $myformaction = $(this).attr('action');
        if(($('select#cost_sel_category').val() == 0) && ($('input#deal_id').val().length === 0)) {
            alert("1.Please enter the deal id. \n2.Please select an option for 'Cost Selection Category' on the Basic tab.");
        return false;
        } else if($('select#cost_sel_category').val() == 0) {
            alert("Please select an option for 'Cost Selection Category' on the Basic tab");
        return false;
        } else if($('input#deal_id').val().length === 0) {
            alert("Please enter the deal id");
            return false;
        } else {
            $busy_button.addClass('busy_on');
            $.ajax({
            url: $(this).attr('action'),
            cache: false,
            type: 'POST',
            data: 'deal_id='+$('input#deal_id').val() + '&action=is_deal_id_exist',
            dataType: 'json',
            success: function(data) {
                        if (data.status === 'error') {
                        alert("Please enter valid deal id");
                        $busy_button.removeClass('busy_on');
                        return;
                        } else {
                            $.ajax({
                            url: $myformaction,
                            cache: false,
                            type: 'POST',
                            data: $myformdata + '&action=custompage_data',
                            dataType: 'json',
                            success: function(data) {
                                // Show title
                                if (data.status == 'error') {
                                    $busy_button.removeClass('busy_on');
                                    $('#err').html('<h3>Error: ' + data.message + '</h3>');
                                    return;
                                }
                                else {
                                    location.reload();
                                    return;
                                }

                            },
                            error: function() {
                                alert('AJAX Error');
                                $busy_button.removeClass('busy_on');
                                $('#results').html('');
                            }
                            });
                        }
                    },
                    error: function() {
                        alert('AJAX Error');
                        $busy_button.removeClass('busy_on');
                        $('#results').html('');
                    }
                    });
        }
       
    });
}

/*-----------------------------------------------------------------------------------*/
/*	Slider
 /*-----------------------------------------------------------------------------------*/
if ($('#full-slider').length != 0) {
    // Load the classic theme
    Galleria.loadTheme(galleria_classic_url);

    var html_string = '';

    $('#full-slider').picasa('init', {
        'overrideLayout': true,
        'imagesize': 1022,
        'thumbsize': 65
    }).picasa('gallery', picasa_account_id, picasa_album_id, function(photos) {
        $.each(photos, function(key, value) {
            html_string += '<img src="' + value.image.url + '" data-description="' + value.description + '" width="' + value.image.width + '" height="' + value.image.height + '" alt="">';
        });

        $('#full-slider').html(html_string);

        // Initialize Galleria
        Galleria.run('#full-slider', {
            transition: 'fade',
            imagePosition: 'top left',
            height: 452,
            width: 1022,
            imageCrop: 'width',
            thumbCrop: 'height',
            showImagenav: true,
            autoplay: 3000,
            preload: 3
        });
    });
}

/*-----------------------------------------------------------------------------------*/
/*	Itinerary
 /*-----------------------------------------------------------------------------------*/
$('#itinerary-tabs-nav li a').click(function() {
    if (!$(this).is('.active')) {
        $('#itinerary-tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');

        $('.tabs .tab').removeClass('active');
        $('.tabs .tab.' + $(this).attr('href').replace('#', '')).addClass('active');
    }

    return false;
});

/*-----------------------------------------------------------------------------------*/
/*	Fancybox
 /*-----------------------------------------------------------------------------------*/
if ($('#filter-form').length === 0) {
    $('.fancybox').fancybox({
        maxWidth: 450,
        maxHeight: 250,
        fitToView: false,
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        scrolling: 'visible',
        padding: 0,
        type: 'iframe',
        helpers: {
            media: {},
            title: {
                type: 'inside',
                position: 'top'
            },
            overlay: {
                locked: false
            }
        },
        iframe: {
            scrolling: 'no'
        }
    });

    $('.fancybox-full').fancybox();
}

/*-----------------------------------------------------------------------------------*/
/*	Placeholders
 /*-----------------------------------------------------------------------------------*/
function enable_placeholders() {
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
}
enable_placeholders();

/*-----------------------------------------------------------------------------------*/
/*	Print Page
 /*-----------------------------------------------------------------------------------*/
$('.print-page').click(function() {
    window.print();

    return false;
});

/*-----------------------------------------------------------------------------------*/
/*	Google Map API
 /*-----------------------------------------------------------------------------------*/
/**
 * Initializes map on Single Itinerary page
 *
 * @param  {array} marker_array
 * @return {void}
 */
function intitialize_single_itinerary_map(marker_array) {

//setTimeout('googleGeocodingFunction(' + addressArray[i] + ')' , 2500);

    for (i = 0; i < marker_array.length; i++) {

        // Find location based on city name

        var location = marker_array[ i ].city_name;

        if (i == 10) {
            setTimeout(function() {
                nextItr(i);
            }, 4000);
            break;
        } else {

            googleGeoCoding(location);
            ;
        }

    }
}

function nextItr(start) {
    for (i = start; i < marker_array.length; i++) {
        var location1 = marker_array[ i ].city_name;

        googleGeoCoding(location1);
    }
}

function googleGeoCoding(location) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': location}, function(results, status) {
        // Location found
        if (status == google.maps.GeocoderStatus.OK) {
            var my_coord = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
            coord_list_alternate[location] = my_coord;
            coord_list.push(my_coord);
            var index = coord_list.length - 1;

            if (index == marker_array.length - 1) {
                coord_list1 = new Array();
                for (i = 0; i < marker_array.length; i++) {
                    var location1 = marker_array[ i ].city_name;
                    my_coord = coord_list_alternate[location1];
                    coord_list1.push(my_coord);

                    // Build marker and add it to the map
                    marker_z_index = marker_z_index - i;
                    my_marker = new google.maps.Marker({
                        map: map,
                        draggable: false,
                        position: my_coord,
                        html: "<p>" + marker_array[ i ].city_name + "</p>",
                        zIndex: marker_z_index,
                        icon: 'http://www.googlemapsmarkers.com/v1/' + String.fromCharCode(65 + i) + '/' + enchanting_google_map_colors.pin_background_color + '/' + enchanting_google_map_colors.pin_text_color + '/' + enchanting_google_map_colors.pin_stroke_color + '/'
                    });

                    // Add click event to show the window when marker is clicked
                    google.maps.event.addListener(my_marker, 'click', function() {
                        my_window.setContent(this.html);
                        my_window.open(map, this);
                    });

                }

                // Add a PolyLine to the map based on coordinates
                var my_path = new google.maps.Polyline({
                    path: coord_list1,
                    strokeColor: '#' + enchanting_google_map_colors.polyline_stroke_color,
                    strokeOpacity: 1,
                    strokeWeight: 3
                });

                my_path.setMap(map);

                // Build bounds for auto-zoom
                var bounds = new google.maps.LatLngBounds();

                // Go through the marker coordinate list
                for (var i = 0; i < coord_list.length; i++) {
                    // Increase the bound to include this marker
                    bounds.extend(coord_list[ i ]);
                }

                // Auto zoom the map to fit these bounds
                map.fitBounds(bounds);
            }
        }
        // Location not found
        else {
            // Temporarily hide the error message
            //alert("Could not find location: " + location);
        }
    });
}
// Initialize on page load
if ($('#itinerary-google-map').length != 0 && typeof marker_array !== 'undefined' && marker_array.length > 0) {

    /*-----------------------------------------------------------------------------------*/
    /*	Google maps
     /*-----------------------------------------------------------------------------------*/

// Load initial options
    var map_options = {
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Initialize map
    var map = new google.maps.Map(document.getElementById("itinerary-google-map"), map_options);

    // Initialize window (which appears when you click a marker)
    var my_window = new google.maps.InfoWindow({
        content: ''
    });

    // Initialize coordinate variables
    var coord_list = new Array();
    var coord_list_alternate = new Array();
    var my_coord;
    var marker_z_index = 100;
    intitialize_single_itinerary_map(marker_array);

}


$( 'select#undo_redo_to' ).on( "click", "option", function() {
    //console.log($(this).val());    
    //$('select#undo_redo_to').find('option').each(function(index, option) {
	$(this).selected = true;
  //  });
    
}); 
var trigger_tab = 0;
$('a[href="#triggerTab"]').click(function(){
    //console.log("trigger tab");
  if($('form#cust-form-update').length > 0) {
      if(trigger_tab == 0) {
      $('.trigger_editor').show();
      $('#trigger_desc_det').data("wysihtml5").editor.setValue($( "div.update_container" ).html());
      trigger_tab=1;
      }        
    } 
}); 

$('select#prepared_by').change(function(){
    $.ajax({
	url: $('form[name="travelcustform"]').attr( 'action' ),
	cache: false,
	type: 'POST',
	data: 'currency='+$('input[name="currency"]').val()+'&consultant_id='+$(this).val()+'&action=consultantphone_number',
	dataType: 'json',
	success: function( data ) {
	// Show title
            if ( data.status == 'error' ) {
            $( '#results' ).html( '<h3>Error: ' + data.message + '</h3>' );
		return;
		}
            if ( data.status == 'success') {
            $('input#prepared_by_phone').val(data.number)
            return;
            } 
                               
	},
	error: function() {
            alert( 'AJAX Error' );
        }
        
	});
                
});

    $('div.advance_payment_tab').on('change','input#invoiceInputFile',function(e){
		if($(this).val()) {
		    var ext =  $(this).val().split('.').pop().toLowerCase();
		    $reset = $(this);
		    if($.inArray(ext, ['pdf']) === -1) {
                       $reset.val(''); 
                       alert('Oops! This type of file is not accepted. Please re-upload PDF file. Thank you.'); 
		       
		    } else if($.inArray(ext, ['pdf']) !== -1) {
		    var tm_invoice_num = $(this).siblings('input#tm_invoice_num').val();        
		    $hep_text = $(this).siblings('.help-block');        
		    $upload_loader = $(this).siblings('.upload_on');        
                    var form_data = new FormData();   
                    var file_data = $(this).prop('files')[0]; 
                    form_data.append("file", file_data);
                    var ajax_url = $('span#invoice_upload_url').html();
                    //console.log(form_data);
                    //console.log(ajax_url);
                    $hep_text.hide();
                    $upload_loader.show();
                    
                    $.ajax({
                        type: 'POST',
                        url: ajax_url,
                        data: form_data,
                        cache: false,
                        contentType: false,
                        processData: false,
                        dataType: "json",
                        async: true
                    }).done(function(data) {                        
                                 var fdata = 'tm_invoice_num='+tm_invoice_num+'&file_url='+data.url+'&action=update_ts_invoice_pdf';
                                    jQuery.post($('form').attr('action'), fdata, function (response) {                                       
                                        var res = jQuery.parseJSON(response);
                                        
                                         if(res.status === "success"){  
                                               $reset.val(''); 
                                               $hep_text.text("Uploaded successfully. ");
                                               $upload_loader.hide();
                                               $hep_text.show();
                                               //$hep_text.append(' <a href="'+data.url+'" target="_blank" > view</a>');
                                            }  else {
                                               $hep_text.text("Upload failed!! Try again"); 
                                               $upload_loader.hide();
                                               $hep_text.show();
                                            }
                                    }).error(function(jqXHR, status, errorThrown) {                       
                                                alert("Oops! Something went wrong. Please try again. If the problem persists, you can contact your travel consultant");
                                    }); 
                    }).fail(function(jqXHR, status, errorThrown) {                      
                        alert("Sorry! Something Went wrong, couldn't process.");
                    }).error(function(jqXHR, status, errorThrown) {                       
                        alert("Oops! Something went wrong. Please try again. ");
                    });
		}
            }
	});
        

    $('div.advance_payment_tab').on('change','input#trip_documents',function(e){
		if($(this).val()) {
		    var ext =  $(this).val().split('.').pop().toLowerCase();
		    $reset = $(this);
		    if($.inArray(ext, ['pdf']) === -1) {
                       $reset.val(''); 
                       alert('Oops! This type of file is not accepted. Please re-upload PDF file. Thank you.'); 
		       
		    } else if($.inArray(ext, ['pdf']) !== -1) {
		    //var tm_invoice_num = $(this).siblings('input#tm_invoice_num').val();        
		    $hep_text = $(this).siblings('.help-block');        
		    $upload_loader = $(this).siblings('.upload_on');        
                    var form_data = new FormData();   
                    $file_data = $(this).prop('files')[0]; 
                    
                    //form_data.append("file", $file_data);
                    $.each($(this).prop('files'),function(j,file){
                        form_data.append('files[]', file);//i had to change "i" by "j"
                    });
                    var ajax_url = $('span#invoice_upload_url').html();
                    //console.log(form_data);
                    //console.log(ajax_url);
                    $hep_text.hide();
                    $upload_loader.show();
                    
                    $.ajax({
                        type: 'POST',
                        url: ajax_url,
                        data: form_data,
                        cache: false,
                        contentType: false,
                        processData: false,
                        dataType: "json",
                        async: true
                    }).done(function(data) { 
                        var arr = [];
                        $.each(data.file_array, function( index, obj ) {   
                           // arr[index] = $.map(obj, function(el) { return el; });
                            console.log(obj.filename);
                            $("div#trip_documents_view").append('<div class="documents_list"><span class="doc_name">'+obj.filename+'</span><span class="remove_document glyphicon glyphicon-remove"></span><span class="file_to_remove">'+obj.file_storage_name+'</span></div>');
                            
                        });
                        if(data.status === "success") {
                             var fdata = 'file_link_array='+JSON.stringify(data)+'&deal_id='+$('input#deal_id').val()+'&action=trip_documents_upload';
                                jQuery.post($('form').attr('action'), fdata, function (response) {                                       
                                    var res = jQuery.parseJSON(response);

                                     if(res.status === "success"){  
                                           $reset.val(''); 
                                           $hep_text.text("Uploaded successfully. ");
                                           $upload_loader.hide();
                                           $hep_text.show();
                                           //$hep_text.append(' <a href="'+data.url+'" target="_blank" > view</a>');
                                        }  else {
                                           $hep_text.text("Upload failed!! Try again"); 
                                           $upload_loader.hide();
                                           $hep_text.show();
                                        }
                                }).error(function(jqXHR, status, errorThrown) {                       
                                            alert("Oops! Something went wrong. Please try again. If the problem persists, you can contact your travel consultant");
                                }); 
                        }    
                    }).fail(function(jqXHR, status, errorThrown) {                      
                        alert("Sorry! Something Went wrong, couldn't process.");
                    }).error(function(jqXHR, status, errorThrown) {                       
                        alert("Oops! Something went wrong. Please try again. ");
                    });
		}
            }
	});      
        
 $('div#trip_documents_view').on('click','span.remove_document',function(e){     
     var file_to_delete = $(this).parent().find('.file_to_remove').html();
     $parent_ele = $(this).parent();
     if (confirm('Are you sure! delete this file?')) { 
            var fdata = 'file_to_delete='+file_to_delete+'&deal_id='+$('input#deal_id').val()+'&action=trip_documents_remove';
              jQuery.post($('form').attr('action'), fdata, function (response) {                                       
                    var res = jQuery.parseJSON(response);
                     if(res.status === "success"){
                            $parent_ele.remove();
                          } else {
                            alert("Something went wrong! reload your page");
                        }
                }).error(function(jqXHR, status, errorThrown) {                       
                            alert("Oops! Something went wrong. Please try again. If the problem persists, you can contact your travel consultant");
                });
        } else {
            //alert('Why did you press cancel? You should have confirmed');
        }
 }); 
 
jQuery(document).ready(function(){
if ((typeof generate_pre_popup !== 'undefined') && (generate_pre_popup == true)) {
    jQuery('#customized-page').modal('show');   
}
});
