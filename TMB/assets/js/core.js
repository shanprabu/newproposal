$(document).ready(function(){

  	// Tool tip js starts 
  	Tipped.create('.tool-tip');
    // Tool tip js ends 

     // Date Picker
     $(".dob").datepicker({
     	dateFormat: 'dd M yy',
     	autoclose:true,
     	showOtherMonths: true,
     	selectOtherMonths: true
     }).attr('readonly', 'readonly');

	// Date Picker
	$(".start-date").datepicker({
		dateFormat: 'dd M yy',
		autoclose:true,
		showOtherMonths: true,
		selectOtherMonths: true
	})
	.attr('readonly', 'readonly');
	$(".end-date").datepicker({
		dateFormat: 'dd M yy',
		autoclose:true,
		showOtherMonths: true,
		selectOtherMonths: true
	})
	.attr('readonly', 'readonly');

	$('#intrnalserv').change(function() {
		console.log($(this).val());
	}).multipleSelect({
		width: '100%'
	});

});