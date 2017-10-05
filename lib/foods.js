pry = require('pryjs');

$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(foods){
    var foodsArray = foods;
    foodsArray.forEach(function(food){
      eval(pry.it);
      $(".food-table").append()
    })
  }).catch(function(error){
    console.log(error);
  })
})
