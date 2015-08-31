jQuery(document).ready(function($){
	$(".accordion").smk_Accordion({closeAble: true});
});

/* for onclick scroll to position*/

$("#contactus").click(function() {
	$("#contactus-open .standard-type").css({'display':"block"});
	$('html,body').animate({
		scrollTop: $("#contactus-open").offset().top},
		'slow');

});

$("#chowcompare").click(function() {
	$("#chowcompare-open .standard-type").css({'display':"block"});
	$('html,body').animate({
		scrollTop: $("#chowcompare-open").offset().top},
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