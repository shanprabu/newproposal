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
      if($(this).find('.statusTxt').text()=="Processed") {
      $(this).parent().siblings('.dropdown-toggle').html($(this).html());
      $('#menuContainer').hide();
    }
    else
      $(this).parent().siblings('.dropdown-toggle').html($(this).html() + '<b class="caret" id="processed-careticon"></b>');
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
     $('#div-display-container').append('<div class="table-responsive tbl" id="tbl-div-display"><button class="closeTable"><i class="fa fa-times"></i></button><table class="table"><tbody><tr><th class="text-left pmtdtl-th pay-top-padding">PAYMENT<span id="counter">'+counter+'</span> </th><th id="usd-pay'+counter+'" class="text-left pmtdtl-th color-usd pay-top-padding">USD </th></tr><tr><th class="text-left pmtdtl-th duedate-alignment" style="border-top:0;">DUE DATE</th></tr><tr><th id="date-pay'+counter+'" style="border-top:0; padding-top: 0;" class="text-left color-usd"></th></tr></tbody></table></div>');
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
  
// var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

// copyTextareaBtn.addEventListener('click', function(event) {
//   var copyTextarea = document.querySelector('.js-copytextarea');
//   copyTextarea.select();

//   try {
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'successful' : 'unsuccessful';
//     console.log('Copying text command was ' + msg);
//   } catch (err) {
//     console.log('Oops, unable to copy');
//   }
// });
  $(function() {
      $('input[name=post-format]').on('click init-post-format', function() {
          $('#gallery-box').toggle($('#post-format-gallery').prop('checked'));

      }).trigger('init-post-format');
  });
  /*Percentage Value toggle*/
 $(function() {
      $('input[name=percentOptionYesNo]').on('click init-post-format', function() {
          $('.individualPercentage').toggle($('#percentOption').prop('checked'));
          $('#inputFieldApplyAll').prop('readonly',false);
          $('.individualPercentage').prop('readonly',true);
          $('#inputFieldApplyAll').removeClass('disabled');
          $('.individualPercentage').addClass('disabled');
      }).trigger('init-post-format');

      $('input#checkBoxApplyAll').change(function () {
        if($(this).is(':checked')) {
          $('#inputFieldApplyAll').attr('readonly', false);
          $('.individualPercentage').attr('readonly', true);
          $('#inputFieldApplyAll').removeClass('disabled');
          $('.individualPercentage').addClass('disabled');
        } else {
          $('#inputFieldApplyAll').attr('readonly', true);
          $('input.individualPercentage').attr('readonly', false);
          $('#inputFieldApplyAll').addClass('disabled');
          $('.individualPercentage').removeClass('disabled');
        }
    });
  });
/* $(function() {
      $('input[name=applyAllCheckBox]').attr('checked', function() {
          $('#inputFieldApplyAll').prop('disabled',false);
          $('.individualPercentage').prop('disabled',false);
      }).trigger('init-post-format');
  });*/
 

$('.copyBtnCommon').click(function () {
    $('.copiedBtnCommon').hide();
    $('.copyBtnCommon').show();
    $(this).next().show();
    $(this).hide();
    $(this).prev().focusout();
   /* copyToClipboard($(this).prev());
    console.log( typeof((this).prev()));*/
  });

 var clipboard = new Clipboard('.copyBtnCommon');

});