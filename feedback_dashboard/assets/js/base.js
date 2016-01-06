jQuery(document).ready(function($){

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

/* for radial js*/
var rg_overall=d3.select(document.getElementById('rg_overall'));
start();

function onClick1() {
  deselect();
  rg_overall.attr("class","selectedRadial");
}

function labelFunction(val,min,max) {
}

function deselect() {
  rg_overall.attr("class","radial");
}

function start() {
  var rp1 = radialProgress(document.getElementById('rg_overall'))
  .label("")
  .onClick(onClick1)
  .diameter(250)
  .value(76)
  .render();
}

/*-------for common rated hotels --------------*/
var rg_overall=d3.select(document.getElementById('rg_overall'));
var rated_hotel1=d3.select(document.getElementById('rated_hotel1'));
var rated_hotel2=d3.select(document.getElementById('rated_hotel2'));
var rated_hotel3=d3.select(document.getElementById('rated_hotel3'));
var rated_hotel4=d3.select(document.getElementById('rated_hotel4'));
var rated_hotel5=d3.select(document.getElementById('rated_hotel5'));

start();

function onClick0() {
  deselect();
  rg_overall.attr("class","selectedRadial");
}
function onClick1() {
  deselect();
  rated_hotel1.attr("class","selectedRadial");
}

function onClick2() {
  deselect();
  rated_hotel2.attr("class","selectedRadial");
}

function onClick3() {
  deselect();
  rated_hotel3.attr("class","selectedRadial");
}

function onClick4() {
  deselect();
  rated_hotel4.attr("class","selectedRadial");
}

function onClick5() {
  deselect();
  rated_hotel5.attr("class","selectedRadial");
}

function labelFunction(val,min,max) {

}

function deselect() {
  rg_overall.attr("class","radial");
  rated_hotel1.attr("class","radial");
  rated_hotel2.attr("class","radial");
  rated_hotel3.attr("class","radial");
  rated_hotel4.attr("class","radial");
  rated_hotel5.attr("class","radial");
}

function start() {

  var rp1 = radialProgress(document.getElementById('rated_hotel1'))
  .onClick(onClick1)
  .diameter(180)
  .value(94)
  .render();

  var rp2 = radialProgress(document.getElementById('rated_hotel2'))
  .onClick(onClick2)
  .diameter(180)
  .value(91)
  .render();

  var rp3 = radialProgress(document.getElementById('rated_hotel3'))
  .onClick(onClick3)
  .diameter(180)
  .value(89)
  .render();

  var rp4 = radialProgress(document.getElementById('rated_hotel4'))
  .onClick(onClick3)
  .diameter(180)
  .value(84)
  .render();


  var rp5 = radialProgress(document.getElementById('rated_hotel5'))
  .onClick(onClick3)
  .diameter(180)
  .value(78)
  .render();

  var rp1 = radialProgress(document.getElementById('rg_overall'))
  .label("")
  .onClick(onClick0)
  .diameter(230)
  .value(76)
  .render();

}

});

