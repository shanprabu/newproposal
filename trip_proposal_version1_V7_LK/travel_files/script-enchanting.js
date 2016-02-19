var counter = 0;
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        if($(this).attr("value")=="genr"){
            $(".box").not(".hold").hide();
            $(".hold").show();
        }
        if($(this).attr("value")=="hold"){
            $(".box").not(".genr").hide();
            $(".genr").show();
        }
    });
    counter = Number($('#count').text());;
    $('#tbl-div-confirm').hide();

    $('.intermediate-details').on('click', '.dropdown-menu li', function(){
      $(this).parent().siblings('.dropdown-toggle').html($(this).html() + '<b class="caret"></b>');
    });

  $('#add').click(function () {
    $('#tbl-div-confirm').show();
    $('#add').hide();
    $("#add-tbl #datepicker").datepicker();
  });

 $('#confirm').click(function () {
      var usd = $('input#usd-payment').val();
      var date = $('input#datepicker').val();
     counter = Number($('#count').text());
     $('#div-display-container').append('<div class="table-responsive tbl" id="tbl-div-display"><button class="closeTable"><i class="fa fa-times"></i></button><table class="table"><tbody><tr><th class="text-left pmtdtl-th pay-top-padding">PAYMENT<span id="counter">'+counter+'</span> </th><th id="usd-pay'+counter+'" class="text-left pmtdtl-th color-usd pay-top-padding">USD </th></tr><tr><th class="text-left pmtdtl-th" style="border-top:0;">DUE DATE</th><th style="border-top:0;"><div class="dropdown"><div id="drpdwn-status" class="dropdown-toggle" data-toggle="dropdown"><span class="statusTxt">Processed</span><img src="./travel_files/processed_drpd.png"/><span class="caret"></span></div><ul class="dropdown-menu" id="menuContainer"><li id="li-status-processed"><span class="statusTxt">Processed</span> <img class="statusDropDown" src="./travel_files/processed_drpd.png"/></li><li id="li-status-processing"><span class="statusTxt">Processing</span> <img class="statusDropDown" src="./travel_files/processing_drpd.png"/></li><li id="li-status-invalid"><span class="statusTxt">Invalid </span> <img class="statusDropDown" src="./travel_files/invalid_drpd.png"/></li></ul></th></tr><tr><th id="date-pay'+counter+'" style="border-top:0; padding-top: 0;" class="text-left color-usd"></th></tr></tbody></table></div>');
     $('#usd-pay'+counter).html('<span class="span-usd">USD</span>' + usd);
     $('#date-pay'+counter).text(date);
     $('#count').text(Number($('#count').text())+1);
     $('#add').show();
     $('#tbl-div-confirm').hide();
    });

  $(document).on('click', '#div-display-container .closeTable,#tbl-div-confirm .closeTable', function(e) {
    $(this).parent().hide();
    $('#add').show();
  });

 /* $('.tbl-attachment').on('click', '.close-attachment', function(e) {
    $(this).parent().remove();
  });*/

  $('.passengers-list').on('click', '.span-edit', function(e) {

    e.stopPropagation();
    $(this).hide();
    $(this).siblings('.span-saving').show();

    $(this).parents('li.passengers-list-item').addClass('bgCccLiPassengersList');
    
    var name = $(this).siblings('.passengers-list-item-details').find('.span-name').text();
    var email = $(this).siblings('.passengers-list-item-details').find('.span-email').text();

    console.log(name, email);

    $(this).siblings('.passengers-list-item-details').hide();
    $(this).siblings('.passengers-list-item-details-edit').show();
    $(this).siblings('.passengers-list-item-details-edit').find('input').select();

    $(this).siblings('.passengers-list-item-details-edit').find('.span-name-edit').val(name);
    $(this).siblings('.passengers-list-item-details-edit').find('.span-email-edit').val(email);
  });

  $('.passengers-list').on('click', '.span-saving', function(e) {

    e.stopPropagation();
    $(this).hide();
    $(this).siblings('.span-edit').show();

    $(this).parents('li.passengers-list-item').removeClass('bgCccLiPassengersList');
    
    var name = $(this).siblings('.passengers-list-item-details-edit').find('.span-name-edit').val();
    var email = $(this).siblings('.passengers-list-item-details-edit').find('.span-email-edit').val();

    $(this).siblings('.passengers-list-item-details-edit').hide();
    $(this).siblings('.passengers-list-item-details').show();

    $(this).siblings('.passengers-list-item-details').find('.span-name').text(name);
    $(this).siblings('.passengers-list-item-details').find('.span-email').text(email);
  });

  $('.passengers-list').on('click', '.passengers-list-item-details-edit', function(e) {
    e.stopPropagation();
  });
  
var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
});