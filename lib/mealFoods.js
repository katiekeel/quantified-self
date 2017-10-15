var $ = require('jQuery');
var HTMLHelper = require('./htmlHelper.js');
var ajax = require('./mealsAjax.js')
var foods = require('./foods.js')

function createAddFoodTable(foods) {
  HTMLHelper.createFoodsMealsTable(foods, "#meals-food-table tbody")
}

function getMealFoodsAfterSubmit(foods) {
  $(".food-meal-add-buttons").find('form').submit(function(event) {
    event.preventDefault();
    let meal = {}
    meal.id = $(this).attr("id").split("-")[1]
    meal.name = $(this).attr("id").split("-")[0]
    foods = getFoodInfo();
    postAjax(meal, foods)
  })
}

function getFoodInfo() {
  let foods = []
  $(".food-table input:checked").each(function(){
    let food = {}
    food.id = parseInt($(this).attr("value"))
    food.name = $(this).closest("tr").find(".replaceme-name").text().replace(/\s+/g, ' ').trim();
    food.calories = $(this).closest("tr").find(".replaceme-cal").text().replace(/\s+/g, ' ').trim();
    foods.push(food)
  })
  return foods
}

// couldn't get ajax methods to be available in this file so wrote it here instead
function postAjax(meal, foods) {
  foods.forEach(function(food) {
    $.ajax({
      method: 'POST',
      url: "http://localhost:3000/api/v1/meals/" + meal.id + "/foods/" + food.id,
    }).done(function(data) {
      HTMLHelper.addNewMealFoodsToTable(meal, foods);
      // add method here to clear checkboxes
      // call method to updated calorie totals
    })
    .catch(foods.logErrors)
  })
}

getMealFoodsAfterSubmit();

module.exports = {createAddFoodTable}
