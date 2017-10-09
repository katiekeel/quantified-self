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
