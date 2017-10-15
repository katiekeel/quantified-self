var $ = require('jQuery');
var ajax = require('./mealsAjax.js')
var foods = require('./foods.js')
var mealFoods = require('./mealFoods.js')


function reloadTable() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(data){
    $('#meals-food-table > tbody').empty();
    mealFoods.createAddFoodTable(data)
    $('#meals-food-table').addClass("sortable")
  }).catch(foods.logErrors)
}

$(document).ready(function () {
    var clicked = 0;
    $('.food-tbl-name-header').on('click', function (e) {
        clicked++;
        if (clicked % 3 == 0) {
          $('#meals-food-table').removeClass("sortable")
          reloadTable();
        }
      })

    var clicked = 0;
    $('.food-tbl-cal-header').on('click', function (e) {
      clicked++;
      if (clicked % 3 == 0) {
        $('#meals-food-table').removeClass("sortable")
        reloadTable();
      }
    })
})
