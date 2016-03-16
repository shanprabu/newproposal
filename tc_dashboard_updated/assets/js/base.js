jQuery(document).ready(function($){


  $("#topTenPackages").tablesorter({
    headers: {
      0: {
        sorter: false
      },
      // 2: {
      //   sorter: false
      // },
      // 5: {
      //   sorter: false
      // }
    }
  });

  $("#agentdashboardtable").tablesorter({
    headers: {
      2: {
        sorter: false
      },
      // 4: {
      //   sorter: false
      // },
      5: {
        sorter: false
      },
      // 9: {
      //   sorter: false
      // }
    }
  });

  // monthpicker
  $('#monthpicker1').datepicker();
  $('#monthpicker2').datepicker();
  $('#monthpicker3').datepicker();

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

var config = {
  '.chosen-select'           : {},
  '.chosen-select-deselect'  : {allow_single_deselect:true},
  '.chosen-select-no-single' : {disable_search_threshold:10},
  '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
  '.chosen-select-width'     : {width:"95%"}
}
for (var selector in config) {
  $(selector).chosen(config[selector]);
}

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

$(".reset").click(function() {
    $(this).closest('form').find("input[type=text], input[type=email], input[type=password], textarea").val("");
});

//number
var textbox = document.getElementById("num");
    // called when key is pressed
    // in keydown, we get the keyCode
    // in keyup, we get the input.value (including the charactor we've just typed
      textbox.addEventListener("keydown", function _OnNumericInputKeyDown(e) {
        var key = e.which || e.keyCode; // http://keycode.info/
        if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            // alphabet
            key >= 65 && key <= 90 ||
            // spacebar
            key == 32) {
          e.preventDefault();
        return false;
      }
      if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            // numbers
            key >= 48 && key <= 57 ||
            // Numeric keypad
            key >= 96 && key <= 105 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (key == 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (key == 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (key >= 35 && key <= 39) ||
            // Backspace and Tab and Enter
            key == 8 || key == 9 || key == 13 ||
            // Del and Ins
            key == 46 || key == 45) {
        return true;
    }
        var v = this.value; // v can be null, in case textbox is number and does not valid
        if (
            //  minus, dash
            key == 109 || key == 189) {
            // if already has -, ignore the new one
          if (v[0] === '-') {
                //console.log('return, already has - in the beginning');
                return false;
              }
            }
            if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            // comma, period and dot on keypad
            key == 190 || key == 188 || key == 110) {
            // already having comma, period, dot
          if (/[\.,]/.test(v)) {
                //console.log('return, already has , . somewhere');
                return false;
              }
            }
          });
textbox.addEventListener("keyup", function _OnNumericInputKeyUp(e) {
  var v = this.value;
        if (+v) { // convert to number success, let it be
            //                      "1000"  "10.9"  "1,000.9"   "011"   "10c"   "$10"
            //+str, str*1, str-0    1000    10.9    NaN         11      NaN     NaN
          } else if (v) {
            // refine the value
            v = (v[0] === '-' ? '-' : '') + v.replace(/[^0-9\.]/g, ''); // this replace also remove the -, we add it again if needed
            v = v.replace(/\.(?=(.*)\.)+/g, '');  // remove all dot that have other dot following. After this processing, only the last dot is kept.
            this.value = v; // update value only if we changed it
          }
        });

