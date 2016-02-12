$(document).ready(function(){
	// $('#drpdwn-name, #drpdwn-name-div, #drpdwn-name-gmail').click(function(){
	//     $('#drpdwn-status1').html($(this).children('span').html());
	// });
	// $('#drpdwn-name1, #drpdwn-name-div1, #drpdwn-name-gmail1').click(function(){
	//     $('#drpdwn-status2').html($(this).children('span').html());
	// });
	// $('#drpdwn-name2, #drpdwn-name-div2, #drpdwn-name-gmail2').click(function(){
	//    $('#drpdwn-status3').html($(this).children('span').html());
	// });
	
	/*$('.span-edit').click(function(){
		var emailId = $(this).children('.lbl-emailid');
		$(emailId).children('.txtbox-emailid').css('display', 'block').val($(emailId).val());
		$(emailId).css('display', 'none');
	});*/

	
	$('.passengers-list').on('click', '.passengers-list-item-details', function(e) {
		console.log($(this).parents('.dropdown-menu'));
		var element = $(this).clone();
		$(this).parents('.dropdown-menu').siblings('.dropdown-toggle').html(element);
	});
});