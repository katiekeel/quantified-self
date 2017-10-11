var $ = require('jQuery');
var foods = require('./foods.js')

function createTables(meals) {
  meals.forEach(function(meal) {
    createMealTable(meal, meal.name, mealString)
  })
}

function createMealTable(meal, name, mealString) {
  meal.foods.forEach(function(food) {
    $(`#${name.toLowerCase()}-table tbody`).append(mealString(food))
  })
}

function mealString(food) {
  return `<tr><td class='cell-one meal-food-name'>${food.name}</td>
  <td class='meal-food-cal cell-two'>${food.calories}</td>
  <td class='delete-cell'>
    <button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button>
  </td>
  <td class='food-id' style='visibility:hidden;'>${food.id}</tr>`
}


$(document).ready(function(){
  function calorieColumnFinder() {
    var table = $('.tbod td:nth-child(2)');
    return calorieTotalUp(table)
  };
  calorieColumnFinder();
})

function calorieTotalUp(table){
  // table.forEach(function(row){
  // })
}

module.exports = {createTables}
