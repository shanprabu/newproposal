jQuery(document).ready(function($){
	$("#language").msDropdown({visibleRows:4});
	$("#country").msDropdown({visibleRows:4});

  $(".searchcontainer :checkbox").change(function() {
    var str="<ul>";
    var arr = $(".searchcontainer :checkbox:checked").map(function() { return $(this).next().text(); }).get();
    $.each( arr, function( key, i ) {
      str = str + "<li>"+i+"<span class='remove'>x</span></li>";
    });
    str = str + "</ul>";
    $("#listselected").html(str);




    $('#listselected li').on("click",".remove",function(){
      td.removeClass("rowSelected");
      $(".searchcontainer :checkbox:checked").removeAttr("checked");
      
      $(this).parent().remove();
      

    });


    var td = $(this).parent(); 
    if (td.is('.rowSelected'))      
      td.removeClass("rowSelected");      
    else        
      td.addClass("rowSelected"); 
  });  

  //$('.scroll-pane').jScrollPane();

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





