var $ = require('jQuery');
var foods = require('./foods.js')
var meals = require('./indexMealTables.js');
var mealFoods = require('./mealFoods.js')
var API = 'https://powerful-chamber-89728.herokuapp.com/';

$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "https://powerful-chamber-89728.herokuapp.com/api/v1/meals"
  }).done(function(data){
    meals.createTables(data)
  })
  .catch(foods.logErrors)
});

  $(document).ready(function(){
    $.ajax({
      type: "get",
      url: "https://powerful-chamber-89728.herokuapp.com/api/v1/foods"
    }).done(function(data){
      mealFoods.createAddFoodTable(data)
    }).catch(foods.logErrors)
  });


function deleteMealFoodAjax(meal, food) {
  $.ajax({
    method: 'DELETE',
    url: "https://powerful-chamber-89728.herokuapp.com/" + meal + "/foods/" + food,
  }).done(meals.clearHouse)
  .catch(foods.logErrors)
}

module.exports = {deleteMealFoodAjax}
