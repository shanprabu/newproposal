jQuery(document).ready(function($){
	//Navigation bar
	$nav_items = $('#wrapper header nav ul.nav.nav-tabs > li > a');
	$nav_items.on('click', function() {
		$current_tab = $(this);
		$nav_items.removeClass('active');
		$current_tab.addClass('active');
	});
	//Initialize search form to one way
	var fieldsetName = "#" + $('input:radio[name=searchType]:checked').val() + "-form";
	changeForm();

	//Function to show and hide forms for one way, round trip and multi city
	function changeForm() {
		$('fieldset').attr('disabled','disabled');
		$(fieldsetName).removeAttr('disabled');
	}
	
	//Change form according to selected radio button 
	$('.radio-inline').on('click',function() {
		fieldsetName = "#" + $(this).siblings('input[name=searchType]').val() + "-form";
		changeForm();
	});
	
	// HTML for new city row in multicity form
	var newCity = "<div class=\"col-md-12 multicity-grp\"><div class=\"form-group col-md-4 location\"> <input type=\"text\" class=\"form-control\" name=\"from\" placeholder=\"From\"></div><div class=\"form-group col-md-4 location\"><input type=\"text\" class=\"form-control\" name=\"to\" placeholder=\"To\"></div><div class=\"form-group col-md-2 date\"><input type=\"text\" class=\"form-control datepicker\" name=\"date\" placeholder=\"Depart on\"></div><button class=\"remove-city\">x</button></div>";
	var maxCities = 5;
	//Add new city function
	$('.add-city').on('click',function(event) {
		event.preventDefault();
		$('#multiCity-form .multicity-grp').last().after(newCity);
		$('#multiCity-form .multicity-grp').last().find('.datepicker').datepicker();
		$('.remove-city').css('display','inline-block');
		if($('#multiCity-form .multicity-grp').length==maxCities) {
			$('.add-city').hide();
		}
	});

	//Remove city function
	$('#multiCity-form').on('click','.remove-city', function(event) {
		event.preventDefault();
		$(this).parent().remove();
		// console.log($(this).parent().html());
		$('.add-city').show();
		if ($('#multiCity-form .multicity-grp').length == 2) {
			$('.remove-city').hide();
		};
	});

	$('.location input').on('change',function() {
		$(this).parent().addClass('has-value');
		if ($(this).val()=="") {
			$(this).parent().removeClass('has-value');
		};
	});

	$(function() {
	    $( ".datepicker" ).datepicker();
	});
});
