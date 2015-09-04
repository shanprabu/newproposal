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

	if($(".destination-timeline ul li").length == 1)
	{
		$(".destination-timeline ul li .desthrtimeline").hide();
	}
	if($(".destination-timeline ul li").length == 9)
	{
		$(".scrollbar").hide();
	}

	$('.open-summary').click(function(){
      $('#summary-content').slideDown('2000', "swing", function () {
        // Animation complete.
      });
    });
    $('#summary-content .slidetop').click(function(){
      $('#summary-content').slideUp('2000', "swing", function () {
        // Animation complete.
      });
    });

});

function cloneDiv(divID) {
      var id = document.getElementById("sectioncont").value;
      id++;
      document.getElementById("sectioncont").value = id;

      var newDiv = $(divID).clone();
      newDiv.attr("sectioncont", 'div' + id);

      newDiv.children()[0].id = 'input' + id;
      $("#button1").hide();
      newDiv.children()[1].id = 'button' + id;
      newDiv.children()[1].innerHTML = 'X';
      newDiv.children()[1].onclick = function() {
        $(this.parentNode).remove();
        $("#button1").show();
      };

      newDiv.appendTo(".addingtravelhotel");
    }