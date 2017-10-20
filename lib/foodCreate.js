var $ = require('jQuery');
var Food = require('./food.js')
var ajaxCalls = require('./foodAjax.js')
var HTMLHelper = require('./htmlHelper.js')

function addFoodOnClick(){
  $('#food-add-btn').on('click', function(e){
    addFoods(e)
  });
}

function addFoods(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  food = $("#add-foods :input").serializeArray();
  return checkEntryAndCreate(food)
};


function checkEntryAndCreate(food){
  if (food[0].value == "" && food[1].value == "") {
    HTMLHelper.blankNameError();
    HTMLHelper.blankCaloriesError();
  } else if (food[1].value == "") {
    HTMLHelper.blankCaloriesError();
  } else if (food[0].value == "") {
    HTMLHelper.blankNameError();
  } else {
    HTMLHelper.clearAddFormResults();
    createFoods(food);
  }
};

function createFoods(food) {
  foodData = {id: null, name: food[0].value, calories: food[1].value}
  newFood = new Food(foodData)
  formattedFood = formatForPost(newFood);
  ajaxCalls.postAjax(formattedFood);
};


function formatForPost(newFood) {
  return {food: {name: newFood.name, calories: newFood.calories}}
};

addFoodOnClick();
