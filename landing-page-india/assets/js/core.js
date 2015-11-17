jQuery(document).ready(function($){

	$('.nstSlider').nstSlider({
		"left_grip_selector": ".leftGrip",
		"right_grip_selector": ".rightGrip",
		"value_bar_selector": ".bar",
		"highlight": {
			"grip_class": "gripHighlighted",
			"panel_selector": ".highlightPanel"
		},
		"value_changed_callback": function(cause, leftValue, rightValue) {
			$('.leftLabel').text(leftValue);
			$('.rightLabel').text(rightValue);
		},
	});
            // Call methods and such...
            var highlightMin = Math.random() * 20,
            highlightMax = highlightMin + Math.random() * 80;
            $('.nstSlider').nstSlider('highlight_range', highlightMin, highlightMax);

            /*-----------language dropdown-------*/
            $("#language").msDropdown({visibleRows:4});

	//Sort random function
	function random(owlSelector){
		owlSelector.children().sort(function(){
			return Math.round(Math.random()) - 0.5;
		}).each(function(){
			$(this).appendTo(owlSelector);
		});
	}

	$("#owl-demo").owlCarousel({
		pagination: false,
		navigation: true,
		navigationText: [
		"<i class='icon-chevron-left icon-white'></i>",
		"<i class='icon-chevron-right icon-white'></i>"
		],
        //Call beforeInit callback, elem parameter point to $("#owl-demo")
        beforeInit : function(elem){
        	random(elem);
        }

    });

	var cancel = false;
	$("div.linkpara1, div.linkpara2, div.linkpara3").hide();
	$(".linkhover1").hover(function(){
		cancel = (cancel)?false: true;    
		if(!cancel){
			$("div.linkpara1").hide();
		}
		else if(cancel){
			$("div.linkpara1").show();
		}
	});
	$(".linkhover2").hover(function(){
		cancel = (cancel)?false: true;    
		if(!cancel){
			$("div.linkpara2").hide();
		}
		else if(cancel){
			$("div.linkpara2").show();
		}
	});
	$(".linkhover3").hover(function(){
		cancel = (cancel)?false: true;    
		if(!cancel){
			$("div.linkpara3").hide();
		}
		else if(cancel){
			$("div.linkpara3").show();
		}
	});

});

/* for onclick scroll to position*/

$("#createmytripbtn").click(function() {
	$('html,body').animate({
		scrollTop: $("#createmytripbtn-open").offset().top},
		'slow');

});

$("#createmytripbtn2").click(function() {
	$('html,body').animate({
		scrollTop: $("#createmytripbtn-open").offset().top},
		'slow');

});

$("#moreabtus").click(function() {
	$("#moreabtus-open .standard-type").css({'display':"block"});
	$('html,body').animate({
		scrollTop: $("#moreabtus-open").offset().top},
		'slow');

});

// Hide the extra content initially, using JS so that if JS is disabled, no problemo:
$('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

// Set up the toggle effect:
$('.read-more-show').on('click', function(e) {
	$(this).next('.read-more-content').removeClass('hide');
	$(this).addClass('hide');
	e.preventDefault();
});

// Changes contributed by @diego-rzg
$('.read-more-hide').on('click', function(e) {
	var p = $(this).parent('.read-more-content');
	p.addClass('hide');
  p.prev('.read-more-show').removeClass('hide'); // Hide only the preceding "Read More"
  e.preventDefault();
});



// Date Picker
$(".start-date").datepicker({
	dateFormat: 'dd M yy',
	autoclose:true,
	showOtherMonths: true,
	selectOtherMonths: true
})
.attr('readonly', 'readonly');




// hack for IE 11 only!! Can also be used with $(document).ready() 
jQuery(window).load(function() {
	if(navigator.userAgent.match(/Trident.*rv:11\./)) {
		$(document).on('click','label[for]',function(e)
		{ 
			$('#' + $(this).attr('for')).trigger('click'); 
		});
	}

});