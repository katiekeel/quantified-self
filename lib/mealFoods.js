var $ = require('jQuery');
var HTMLHelper = require('./htmlHelper.js');

function createAddFoodTable(foods) {
  HTMLHelper.createFoodsMealsTable(foods, "#meals-food-table tbody")
}

function mealButtonClick(foods) {
  $(".food-meal-add-buttons").find('form').submit(function(event) {
    let mealId = $(this).attr("id").split("-")[1]
    console.log(mealId)
  })
}

mealButtonClick();

module.exports = {createAddFoodTable}
