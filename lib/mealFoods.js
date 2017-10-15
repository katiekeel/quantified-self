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
    let mealId = $(this).attr("id").split("-")[1]
    let selected = []
    $(".food-table input:checked").each(function(){
      selected.push(parseInt($(this).attr("value")))
    })
    postAjax(mealId, selected)
  })
}

// couldn't get ajax methods to be available in this file so wrote it here instead
function postAjax(mealId, selected) {
  selected.forEach(function(food) {
    $.ajax({
      method: 'POST',
      url: "http://localhost:3000/api/v1/meals/" + mealId + "/foods/" + food,
    }).done(function(data) {
      HTMLHelper.addNewMealFoodsToTable();
    })
    .catch(foods.logErrors)
  })
}

getMealFoodsAfterSubmit();

module.exports = {createAddFoodTable}
