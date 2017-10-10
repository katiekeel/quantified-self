var $ = require('jQuery');
var Food = require('./food.js');
var ajaxCalls = require('./foodEdit.js');

function nameEdit(){
  var name = $(this).children('.replaceme-name').html();
  var id = $(this).siblings('.food-id').text();
  var calories = $(this).siblings('.cal-cell').text();
  if (name!=$(this).html()){
    return editFoodsWithData(parseInt(id), name, parseInt(calories));
  }
};

function calorieEdit(){
  var calories = $(this).children('.replaceme-cal').html();
  var id = $(this).siblings('.food-id').text();
  var name = $(this).siblings('.food-cell').text();
  if (calories!=$(this).html()){
    return editFoodsWithData(parseInt(id), name, parseInt(calories));
  }
};

function editFoodsWithData(id, name, calories){
  var newFood = {id: id, name: name, calories: calories};
  newFood = new Food(newFood);
  ajaxCalls.editAjax(newFood)
};

$(document).on('blur', 'td.food-cell', nameEdit);
$(document).on('blur', 'td.cal-cell', calorieEdit);
