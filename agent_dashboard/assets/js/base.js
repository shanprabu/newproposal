jQuery(document).ready(function($){


  $("#dashboardtable").tablesorter({
    headers: {
      2: {
        sorter: false
      },
      3: {
        sorter: false
      },
      5: {
        sorter: false
      }
    }
  });

  $("#agentdashboardtable").tablesorter({
    headers: {
      2: {
        sorter: false
      },
      4: {
        sorter: false
      },
      6: {
        sorter: false
      },
      9: {
        sorter: false
      }
    }
  });

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

$(".dropdown").click(function(){
  $(".dropdown a").addClass("active");
  $(this).find(".dddropdown-menu").slideToggle("fast");
});

});

$(document).on("click", function(event){
  var $trigger = $(".dropdown");
  if($trigger !== event.target && !$trigger.has(event.target).length){
    $(".dddropdown-menu").slideUp("fast");
    $(".dropdown a").removeClass("active");
  }
});

$("html").click(function() {
  $(".displaycontentTG").hide();
})

$(".totalguest").click(function(e){
 e.stopPropagation();
});

$(".inputboxTG, .closeredicon").click(function(e) {
 $(".displaycontentTG").toggle();
});

