var $ = require('jQuery');

$(document).ready(function(){
  function calorieColumnFinder() {
    var tables = $('.diary-body').find('.tbod')
    var total = tableCalorieBreakout(tables)
    setCalories(total)
  };
  calorieColumnFinder();
})

function tableCalorieBreakout(tables){
  tables.each(function(key, val){
    var tableId = $(val).parent().attr('id')
    var calories = $(val).find('td:nth-child(2)')
    return calorieTotalUp(tableId, calories);
  });
}

function calorieTotalUp(tableId, calories){
  var calTotal = 0;
  var tableId = '#'+tableId;
  calories.each(function(key, val){
    return calTotal += Number(val.innerText);
  });
  setCalories(tableId, calTotal)
}

function setCalories(id, total){
  var table = $(id);
  return table.find('.calorie-total').append(total);
}
