$(document).ready(function(){
	$('.passengers-list').on('click', '.passengers-list-item-details', function(e) {
		console.log($(this).parents('.dropdown-menu'));
		var element = $(this).clone();
		$(this).parents('.dropdown-menu').siblings('.dropdown-toggle').html(element);
	});
});