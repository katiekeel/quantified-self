$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(foods){
    var foodsArray = foods;
    foodsArray.forEach(function(food){
      $(".food-table").append("<tr><td name='food-cell'>"
      + food.name
      + "</td><td name='calorie-cell'>"
      + food.calories
      + "</td><td name='delete-cell'><a href='webpack-dev-server/index.html'><img src='/lib/images/delete_red.png' id='delete-food-img'/></a></td></tr>");
    })
  }).catch(function(error){
    console.log(error);
  })
})
