var $ = require('jQuery');
var Food = require('./food.js');
const HTMLHelper = require('./htmlHelper.js');

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

function createMealsTable(unsortedFoods){
  foodsArray = sortFoodsArray(unsortedFoods);
  return HTMLHelper.createTableTemplate(foodsArray, '#tbod')
}

function createFoodsTable(unsortedFoods){
  foodsArray = sortFoodsArray(unsortedFoods);
  return HTMLHelper.createTableTemplate(foodsArray, '.food-table')
}

function sortFoodsArray(unsortedFoods) {
  sortedFoods = unsortedFoods.sort(function(a, b) {
    return (b.id) - (a.id);
  });
  return sortedFoods
}

module.exports = {logErrors, makeFoods, createFoodsTable}
