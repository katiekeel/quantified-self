const Food = require("./food");

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
    + "</td><td name='delete-cell'><a href='webpack-dev-server/index.html'><img src='/lib/images/delete_red.png' id='delete-food-img'/></a></td></tr>");
  });
}

var exports = module.exports = {}
exports.createFoodsTable = createFoodsTable;
exports.makeFoods = makeFoods;
exports.food = Food;
exports.logErrors = logErrors;
