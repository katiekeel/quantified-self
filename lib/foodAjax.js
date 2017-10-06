$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(makeFoods)
  .catch(logErrors)
});

function Food(foodJson){
  this.id = foodJson.id
  this.name = foodJson.name
  this.calories = foodJson.calories
};

function logErrors(error){
  console.log(error)
}

function makeFoods(foods){
  var foodsArray = foods.map(function(food){
    var food = new Food(food);
    return food
  });
  return createFoodsTable(foodsArray);
};

function createFoodsTable(foodsArray){
  var foodsArray = foodsArray;
  foodsArray.forEach(function(food){
    $(".food-table").append("<tr><td name='food-cell'>"
    + food.name
    + "</td><td name='calorie-cell'>"
    + food.calories
    + "</td><td name='delete-cell'><button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button></td><td class='food-id' style='visibility:hidden;'>"
    + food.id
    + "</td></tr>");
  });

  $('.delete-food-btn').on("click", function(){
    $(this).closest('tr').remove()
    // let id = $(this).closest('tr').find('td.food-id').text();
    // $.ajax({
    //   method: 'DELETE',
    //   url: "http://localhost:3000/api/v1/foods/" + id,
    // }).done(function(post){
    //   debugger
    // })
    // .catch(logErrors)
  });
}
