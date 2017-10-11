var $ = require('jQuery');
var Food = require('./food.js');

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

// function createMealsTable(unsortedFoods){
//   foodsArray = sortFoodsArray(unsortedFoods);
//   return foodsArray.forEach(function(food){
//     $('#tbod').append()
//   })
// }
//
// function createFoodsTable(unsortedFoods){
//   foodsArray = sortFoodsArray(unsortedFoods);
//   foodsArray.forEach(function(food){
//     $(".food-table").append(foodString(food))
//   });
// }

function createTable(unsortedFoods, table, string) {
  foodsArray = sortFoodsArray(unsortedFoods);
  foodsArray.forEach(function(food){
    $(table).append(string(food))
  })
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

function mealsString(food) {
  return "<tr class='tbl-row'><td class='cell-one food-cell' contenteditable='true'>"
  + "<span class='replaceme-name' contenteditable='true'>"
  + food.name
  + "</span>"
  + "</td><td class='cell-two cal-cell'>"
  + "<span class='replaceme-cal' contenteditable='true'>"
  + food.calories
  + "</span>"
  + "</td>"
}

function sortFoodsArray(unsortedFoods) {
  sortedFoods = unsortedFoods.sort(function(a, b) {
    return (b.id) - (a.id);
  });
  return sortedFoods
}

function addNewFoodToTable(food) {
  $(".food-table tr:first").after(foodString(food));
}

module.exports = {logErrors, makeFoods, createTable, addNewFoodToTable, foodString}
