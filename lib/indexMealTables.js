var $ = require('jQuery');
var foods = require('./foods.js');
var HTMLHelper = require('./htmlHelper.js');
var totals = require('./totalCalculations.js');

function createTables(meals) {
  meals.forEach(function(meal) {
    createMealTable(meal, mealString)
  })
}

function createMealTable(meal, mealString) {
  meal.foods.forEach(function(food) {
    $(`#${meal.name.toLowerCase()}-table tbody`).append(mealString(meal, food))
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
    calorieColumnFinder();
    ammendRemainingCalories();
  }, 200);
})

function calorieColumnFinder() {
  var tables = $('.diary-body').find('.tbod');
  return tableCalorieBreakout(tables);
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
  table.find('.calories-total').val('');
  return table.find('.calorie-total').append(total);
}

function ammendRemainingCalories(){
  var tables = $('.diary-body').find('.tbod')
  tables.each(function(key, val){
    var tableId = $(val).parent().attr('id');
    return totalCaloriesFinder(tableId);
  })
}

function totalCaloriesFinder(id){
  var id = '#'+id;
  var totalCalories = $(id).find('.calorie-total').text();
  return remainingCaloriesSorter(id, Number(totalCalories));
}

function remainingCaloriesSorter(id, totalCalories){
  if(id === '#breakfast-table'){
    HTMLHelper.stylizeRemainingCalorie(id, totalCalories, 400)
  }else if(id === '#lunch-table'){
    HTMLHelper.stylizeRemainingCalorie(id, totalCalories, 600)
  }else if(id === '#dinner-table'){
    HTMLHelper.stylizeRemainingCalorie(id, totalCalories, 800)
  }else if(id === '#snack-table'){
    HTMLHelper.stylizeRemainingCalorie(id, totalCalories, 200)
  }else{
    console.log('id did not match any given table, or is undefined')
  }
}

function clearHouse(){
  clearRemainingCalValues();
  calorieColumnFinder();
  ammendRemainingCalories();
  totals();
}

function clearRemainingCalValues(){
  var tables = $('.diary-body').find('.tbod');
  tables.each(function(key, val){
    var tableId = $(val).parent().attr('id');
    tableId = '#'+tableId;
    var cell = $(tableId).find('.calorie-total').text('')
    var cell = $(tableId).find('.remaining-total').text('')
    var cell = $('#calories-consumed').text('')
    var cell = $('#remaining-total').text('')
  });
}

function createAddFoodTable(foods) {
  HTMLHelper.createFoodsMealsTable(foods, "#meals-food-table tbody")
}

module.exports = {createTables, ammendRemainingCalories, clearHouse, createAddFoodTable}
