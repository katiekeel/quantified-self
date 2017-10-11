var $ = require('jQuery');
var meals = require('./indexMealTables.js');

$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(data){
    meals.createTables(data)
  })
  .catch(foods.logErrors)
});
