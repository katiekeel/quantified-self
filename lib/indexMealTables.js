var $ = require('jQuery');
var foods = require('./foods.js')

function createTables(meals) {
  meals.forEach(function(meal) {
    if (meal.name.toLowerCase() == "lunch") {
      createMealTable(meal, meal.name, mealString)
    }
  })
}

function createMealTable(meal, name, mealString) {
  $(`#${name.toLowerCase()}-table`).append(mealString(name))
}

function mealString(name) {
  return name + "hey!"
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
