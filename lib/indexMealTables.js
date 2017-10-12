var $ = require('jQuery');
var foods = require('./foods.js')

function createTables(meals) {
  meals.forEach(function(meal) {
    createMealTable(meal, meal.name, mealString)
  })
}

function createMealTable(meal, name, mealString) {
  meal.foods.forEach(function(food) {
    $(`#${name.toLowerCase()}-table tbody`).append(mealString(meal, food))
  })
}

function mealString(meal, food) {
  return `<tr><td class='cell-one meal-food-name'>${food.name}</td>
  <td class='meal-food-cal cell-two'>${food.calories}</td>
  <td class='delete-cell'>
    <button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button>
  </td>
  <td class='meal-id' style='visibility:hidden';>${meal.id}</td>
  <td class='food-id' style='visibility:hidden;'>${food.id}</td></tr>`
}

$(document).ready(function(){
  setTimeout(function(){
    return calorieColumnFinder();
    return ammendRemainingCalories();
  }, 500);
})

function calorieColumnFinder() {
  var tables = $('.diary-body').find('.tbod')
  return tableCalorieBreakout(tables)
};

function tableCalorieBreakout(tables){
  tables.each(function(key, val){
    var tableId = $(val).parent().attr('id');
    var calories = $(val).find('td:nth-child(2)');
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

function ammendRemainingCalories(){
  var tables = $('.diary-body').find('.tbod')
  tables.each(function(key, val){
    var tableId = $(val).parent().attr('id');
    return remainingCaloriesStyler(tableId)
  })
}

module.exports = {createTables}
