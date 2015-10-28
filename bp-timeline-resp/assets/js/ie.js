$(document).on('click','label[for]',function(e)
		{ 
			$('#' + $(this).attr('for')).trigger('click'); 
		});
