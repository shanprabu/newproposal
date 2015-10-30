$(document).ready(function(){

//show hidediv onclick of class
var toggleElements = $(".toggleMe");
$.each(toggleElements, function (key, value) {
	if (value.hasClass('hidden')) {
		value.removeClass('hidden');
		value.addClass('shown');
	} else {
		if (value.hasClass('shown')) {
			value.removeClass('shown');
			value.addClass('hidden');
		}
	}
});


$(".oppspage").click(function() {
	$("#bankpaymentgroup").hide();
	$(".hideitoops").show();
});

$(".sucesspage").click(function() {
	$("#bankpaymentgroup").hide();
	$(".hideitsuccess").show();
});


$(".thankupage").click(function() {
	$("#bankpaymentgroup").hide();
	$(".hideitthanku").show();
});

$(".cngrtsupage").click(function() {
	$("#hideitoops").hide();
	$(".hideitcogrtscont").show();
});


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
//Tipped.create('.tool-tip');
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


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

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

function sample() {
	$('.sampleerrormgnc').siblings('i').addClass('correctfield');
	$('.sampleerrormgn').addClass('errormsg')
	$('.sampleerrormgn').siblings('span').show();

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

