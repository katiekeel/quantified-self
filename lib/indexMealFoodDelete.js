var $ = require('jQuery');
var ajaxCalls = require('./mealsAjax.js');

$(document).ready(function(){
  $('.meal-table').on('click', '.delete-food-btn', function(e){
    $(this).closest('tr').remove()
    let mealId = $(this).closest('tr').find('td.meal-id').text();
    let foodId = $(this).closest('tr').find('td.food-id').text();
    console.log(foodId)
    ajaxCalls.deleteMealFoodAjax(mealId, foodId)
  });
})
