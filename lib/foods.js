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


function createFoodsTable(unsortedFoods){
  foodsArray = sortFoodsArray(unsortedFoods);
  foodsArray.forEach(function(food){
    $(".food-table").append(foodString(food))
  });

  deleteFood();
}

function foodString(food) {
  return "<tr class='tbl-row'><td class='cell-one food-cell' contenteditable='true'>"
  + "<span class='replaceme-name' contenteditable='true'>"
  + food.name
  + "</span>"
  + "</td><td class='cell-two cal-cell'>"
  + "<span class='replaceme-cal' contenteditable='true'>"
  + food.calories
  + "</span>"
  + "</td><td class='delete-cell'><button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button></td><td class='food-id' style='visibility:hidden;'>"
  + food.id
  + "</td></tr>"
}

function deleteFood() {
  $('.delete-food-btn').on("click", function(e){
    $(this).closest('tr').remove()
    let id = $(this).closest('tr').find('td.food-id').text();
    $.ajax({
      method: 'DELETE',
      url: "http://localhost:3000/api/v1/foods/" + id,
    }).done(console.log("yay"))
    .catch(logErrors)
  });
}


$('#add-foods').on('submit', addFoods);

function addFoods(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  food = $("#add-foods :input").serializeArray();
  return checkEntryAndCreate(food)
};

function checkEntryAndCreate(food){
  if (food[0].value == "" && food[1].value == "") {
    blankNameError(e);
    blankCaloriesError(e);
  } else if (food[1].value == "") {
    blankCaloriesError(e);
  } else if (food[0].value == "") {
    blankNameError(e);
  } else {
    clearAddFoodResults()
    createFoods(food);
  }
};

function clearAddFoodResults(){
  $('.error-message').remove();
  $('#food-name').val('');
  $('#food-calories').val('');
}


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


function formatForPost(newFood) {
  return {food: {name: newFood.name, calories: newFood.calories}}
};

function addNewFoodToTable(food) {
  $(".food-table tr:first").after(foodString(food));
  deleteFood();
}

function sortFoodsArray(unsortedFoods) {
  sortedFoods = unsortedFoods.sort(function(a, b) {
    return (b.id) - (a.id);
  });
  return sortedFoods
}
