function logErrors(error){
  console.log(error)
}

function makeFoods(foods){
  var foodsArray = foods.map(function(food){
    var food = new Food(food);
    return food
  });
  return foodsArray;
};


function createFoodsTable(foodsArray){
  var foodsArray = foodsArray;
  foodsArray.forEach(function(food){
    $(".food-table").append("<tr class='tbl-row'><td class='cell-one food-cell' contenteditable='true'>"
    + "<span class='replaceme-name' contenteditable='true'>"
    + food.name
    + "</span>"
    + "</td><td class='cell-two cal-cell'>"
    + "<span class='replaceme-cal' contenteditable='true'>"
    + food.calories
    + "</span>"
    + "</td><td class='food-id' style='visibility:hidden;'>"
    + food.id
    + "</td><td class='delete-cell'><button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button></td></tr>");
  });

  $('.delete-food-btn').on("click", function(){
    $(this).closest('tr').remove()
    let id = $(this).closest('tr').find('td.food-id').text();
    $.ajax({
      method: 'DELETE',
      url: "http://localhost:3000/api/v1/foods/" + id,
    }).done(function(post){
    })
    .catch(logErrors)
  });
}

$(function() {
  $('#add-foods').on('submit', function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      food = $("#add-foods :input").serializeArray()
      if (food[0].value == "" && food[1].value == "") {
        blankNameError(e);
        blankCaloriesError(e);
      } else if (food[1].value == "") {
        blankCaloriesError(e);
      } else if (food[0].value == "") {
        blankNameError(e);
      } else {
        $('.error-message').remove();
        $('#food-name').val('');
        $('#food-calories').val('');
        createFoods(food)
      }
  })
});

function blankNameError(e) {
  $("#food-name").after("<div class='validation error-message' style='color:red;margin-bottom: 20px;'>Please enter a food name</div>");
  $('#food-name').focus();
  focusSet = true;
}

function blankCaloriesError(e) {
  $("#food-calories").after("<div class='validation error-message' style='color:red;margin-bottom: 20px;'>Please enter a calorie amount</div>");
  $('#food-calories').focus();
  focusSet = true;
}

function createFoods(food) {
  foodData = {id: null, name: food[0].value, calories: food[1].value}
  newFood = new Food(foodData)
  formattedFood = formatForPost(newFood);
  postAjax(formattedFood);
};


//can't seem to define an instance method in the class no matter what I do -
// will return and refactor this to be called directly on newFood later
function formatForPost(newFood) {
  return {food: {name: newFood.name, calories: newFood.calories}}
};

function addNewFoodToTable(newFood) {
  $(".food-table tr:first").after("<tr><td class='cell-one food-cell' contenteditable='true'>"
  + "<span class='replaceme-name' contenteditable='true'>"
  + newFood.name
  + "</span>"
  + "</td><td class='cell-two cal-cell'>"
  + "<span class='replaceme-cal' contenteditable='true'>"
  + newFood.calories
  + "</span>"
  + "</td><td class='delete-cell'><button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button></td><td class='food-id' style='visibility:hidden;'>"
  + newFood.id
  + "</td></tr>");

  $('.delete-food-btn').on("click", function(){
    $(this).closest('tr').remove()
    $.ajax({
      method: 'DELETE',
      url: "http://localhost:3000/api/v1/foods/" + newFood.id,
    }).done(function(post){
      console.log(newFood)
    })
    .catch(logErrors)
  });
}
