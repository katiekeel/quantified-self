var $ = require('jQuery');
var foods = require('./foods.js')
var meals = require('./indexMealTables.js');

$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/meals"
  }).done(function(data){
    meals.createTables(data)
  })
  .catch(foods.logErrors)
});

function deleteMealFoodAjax(meal, food) {
  console.log(food)
  $.ajax({
    method: 'DELETE',
    url: "http://localhost:3000/api/v1/meals/" + meal + "/foods/" + food,

  }).done()
  .catch(foods.logErrors)
}

module.exports = {deleteMealFoodAjax}
