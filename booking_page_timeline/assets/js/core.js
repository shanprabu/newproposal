$(document).ready(function(){

	//radiobuttons swatch
	$("input[name$='bankpayment']").click(function() {
		var test = $(this).val();

		$("#bankpaymentgroup .bankpaymentgroupdesc").hide();
		$("#bankpayment" + test).show();
	});

	 //radiobuttons swatch
	 $("input[name$='billingaddress']").click(function() {
	 	var test = $(this).val();

	 	$("#billingaddressgr .billingaddressgrdesc").hide();
	 	$("#billingaddress" + test).show();
	 });

  	// Tool tip js starts 
  	Tipped.create('.tool-tip');
    // Tool tip js ends 

     // Date Picker
     $(".dob").datepicker({
     	dateFormat: 'M dd yy',
     	autoclose:true,
     	showOtherMonths: true,
     	selectOtherMonths: true
     }).attr('readonly', 'readonly');

	// Date Picker
	$(".start-date").datepicker({
		dateFormat: 'M dd yy',
		autoclose:true,
		showOtherMonths: true,
		selectOtherMonths: true
	})
	.attr('readonly', 'readonly');
	$(".end-date").datepicker({
		dateFormat: 'M dd yy',
		autoclose:true,
		showOtherMonths: true,
		selectOtherMonths: true
	})
	.attr('readonly', 'readonly');

});


	//jQuery time
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate

	$(".next").click(function(){

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	$("fieldset").show();
	$("#progressbar li").eq($("fieldset").index(current_fs)).addClass("done");
	$("fieldset").hide();

	//show the next fieldset
	next_fs.show(); 

});

	/*$(".previous").click(function(){

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

	//show the previous fieldset
	previous_fs.show(); 
});*/

$(".submit").click(function(){
	return false;
});


function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#uploadimg')
			.attr('src', e.target.result)
			.width(176)
			.height(132);
		};

		reader.readAsDataURL(input.files[0]);
	}
}


function switchVisible() {
	if (document.getElementById('advancepaymentcont')) {

		if (document.getElementById('advancepaymentcont').style.display == 'none') {
			document.getElementById('advancepaymentcont').style.display = 'block';
			document.getElementById('advancepaymenterror').style.display = 'none';
		}
		else {
			document.getElementById('advancepaymentcont').style.display = 'none';
			document.getElementById('advancepaymenterror').style.display = 'block';
		}
	}
}




    $('.questionlink').click(function(){
      $('.questioncontent').toggle();
    });
    $(document).mouseup(function (e)
    {
      var container = $(".questioncontent");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.hide();
    }
  });




