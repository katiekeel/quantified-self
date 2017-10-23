var $ = require('jQuery');
var foods = require('./foods.js');
var HTMLHelper = require('./htmlHelper.js')

$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "https://qs-express-api.herokuapp.com/api/v1/foods"
  }).done(function(data){
    foods.createFoodsTable(foods.makeFoods(data))
  })
  .catch(foods.logErrors)
});


function postAjax(formattedFood) {
  $.ajax({
    method: 'POST',
    url: 'https://qs-express-api.herokuapp.com/api/v1/foods',
    data: formattedFood,
    dataType: "json",
    success: function addFoodFunction(data){
      HTMLHelper.addNewFoodToTable(data);
    }
  });
};

function editAjax(food) {
  $.ajax({
    method: 'PATCH',
    url: 'https://qs-express-api.herokuapp.com/api/v1/foods' + food.id,
    data: {food: {name: food.name, calories: food.calories}}
  }).done()
  .catch(foods.logErrors);
}

function deleteAjax(id) {
  $.ajax({
    method: 'DELETE',
    url: "https://qs-express-api.herokuapp.com/api/v1/foods" + id,
  }).done()
  .catch(foods.logErrors)
}

module.exports = {postAjax, editAjax, deleteAjax}
