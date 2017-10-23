var $ = require('jQuery');
var HTMLHelper = require('./htmlHelper.js');
var ajax = require('./mealsAjax.js')
var foods = require('./foods.js')
var meals = require('./indexMealTables.js')

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
      url: "https://qs-express-api.herokuapp.com/api/v1/meals/" + meal.id + "/foods/" + food.id,
    }).done(function(data) {
      HTMLHelper.addNewMealFoodToTable(meal, food);
      // add method here to clear checkboxes
      clearCheckboxes();
      // call method to updated calorie totals
      meals.clearHouse();
    })
    .catch(
      foods.logErrors(error);
      clearCheckboxes();)
  })
}

function clearCheckboxes() {
  $('input:checkbox').prop('checked', false);
}

getMealFoodsAfterSubmit();

module.exports = {createAddFoodTable}
