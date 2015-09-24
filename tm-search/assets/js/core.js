jQuery(document).ready(function($){
  /*-----------language dropdown-------*/
  $("#language").msDropdown({visibleRows:4});
  $("#country").msDropdown({visibleRows:4});

  /*--------------for scroller --------------*/
  //$('.scroll-pane').jScrollPane();


  /*-----sbhow and hide div -------*/
  $(".searchbtndiv").on('click', function() {
   $("#divresutsshow").fadeIn();
   $(".divslider").fadeOut();
 });

  /*------------ reset --------*/
  $('#configreset').click(function(){
    //$(':input','#configform')
    //.not(':button, :submit, :reset, :hidden')
    //.val('')
    //.removeAttr('checked')
    //.removeAttr('selected');
    $('#configform')[0].reset();
  });

  /*----------------checkbox for form selection------------------*/
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


  /*------------- slider from top ------------*/
  $('.open-summary').click(function(){
    $('#summary-content').slideDown('2000', "swing", function () {
    });
  });
  $('#summary-content .slidetop').click(function(){
    $('#summary-content').slideUp('2000', "swing", function () {
    });
  });


  /*------ for div switch ------------*/
  function switchVisible() {
    if (document.getElementById('Div1')) {

      if (document.getElementById('Div1').style.display == 'none') {
        document.getElementById('Div1').style.display = 'block';
        document.getElementById('Div2').style.display = 'none';
      }
      else {
        document.getElementById('Div1').style.display = 'none';
        document.getElementById('Div2').style.display = 'block';
      }
    }
  }

});





