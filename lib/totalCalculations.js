var $ = require('jQuery');
var HTMLHelper = require('./htmlHelper.js');

$(document).ready(function(){
  setTimeout(function(){
    calculateCaloriesConsumed();
  }, 500);
})

function calculateCaloriesConsumed(){
  var sTotal= Number($('#snack-total').text());
  var bTotal= Number($('#breakfast-total').text());
  var lTotal= Number($('#lunch-total').text());
  var dTotal= Number($('#dinner-total').text());
  var calTotal = sTotal + bTotal + lTotal + dTotal
  $('#calories-consumed').append(calTotal)
  return calculateTotalRemainingCals(calTotal);
}

function calculateTotalRemainingCals(calTotal){
  HTMLHelper.stylizeRemainingCalorie('#remaining-total', calTotal, 2000)
}

module.exports = calculateCaloriesConsumed
