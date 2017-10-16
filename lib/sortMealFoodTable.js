var $ = require('jQuery');
var ajax = require('./mealsAjax.js')
var foods = require('./foods.js')
var mealFoods = require('./mealFoods.js')
var html = require('./htmlHelper.js')


function reloadTable() {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(foods){
    // need to completely rebuild table and reset it with sortable class, not just empty rows
    $('#meals-food-table').remove();
    html.rebuildFoodsTableAfterSort();
    html.createFoodsMealsTable(foods, '#meals-food-table')
    var newTableObject = document.getElementById('meals-food-table')
    sorttable.makeSortable(newTableObject);
    recordTableClicks();
  }).catch(foods.logErrors)
}

function recordTableClicks() {
  $(document).ready(function () {
      var clicked = 0;
      $('.food-tbl-name-header').on('click', function (e) {
          clicked++;
          if (clicked % 3 == 0 && clicked != 0) {
            reloadTable();
          }
        })

      var clicked = 0;
      $('.food-tbl-cal-header').on('click', function (e) {
        clicked++;
        if (clicked % 3 == 0 && clicked != 0) {
          reloadTable();
        }
      })
    })
}

recordTableClicks();
