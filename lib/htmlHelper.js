const $ = require('jQuery');

class HTMLHelper {
  static createTableTemplate(foodArray, element){
    return foodsArray.forEach(function(food){
      $(element).append("<tr class='tbl-row'><td class='cell-one food-cell' contenteditable='true'>"
      + "<span class='replaceme-name' contenteditable='true'>"
      + food.name
      + "</span>"
      + "</td><td class='cell-two cal-cell'>"
      + "<span class='replaceme-cal' contenteditable='true'>"
      + food.calories
      + "</span>"
      + "</td><td class='delete-cell'><button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button></td><td class='food-id' style='visibility:hidden;'>"
      + food.id
      + "</td></tr>")
    })
  }
  static clearAddFormResults(){
    $('.error-message').remove();
    $('#food-name').val('');
    $('#food-calories').val('');
  }
  static blankNameError() {
    $("#search-foods-area").append("<div class='validation error-message' style='color:red;margin-bottom: 20px;'>Please enter a food name</div>");
    $('#food-name').focus();
    focusSet = true;
  }
  static blankCaloriesError() {
    $("#search-foods-area").append("<div class='validation error-message' style='color:red;margin-bottom: 20px;'>Please enter a calorie amount</div>");
    $('#food-calories').focus();
    focusSet = true;
  }
  static addNewFoodToTable(food) {
    $(".food-table tr:first").after(foodString(food));
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
  }
  static stylizeRemainingCalorie(id, total, num){
    var remainingCals = (num - total)
    var color = determineColor(remainingCals);
    id === '#remaining-total' ? stylizeTotals(color) : $(id).find('.remaining-total').append(remainingCals).css('color', color);
    function determineColor(cals){
      if(cals >= 0){
        return '#7E8F7C'
      }else if(cals < 0){
        return '#c13607'
      }else{
        console.log('color error')
      }
    }
    function stylizeTotals(color){
      $(id).append(remainingCals).css('color', color);
      var borderColor = '3px double ' + color
      $('#remaining-total').css('border-top', borderColor)
    }
  }

  static createFoodsMealsTable(foodArray, element){
    foodsArray.forEach(function(food){
      $(element).append(`<tr class='tbl-row'>
      <td class='cell-one food-cell' contenteditable='true'>
      <span class='replaceme-name' contenteditable='true'>
      ${food.name}
      </span>
      </td>
      <td class='cell-two cal-cell'>
      <span class='replaceme-cal' contenteditable='true'>
      ${food.calories}
      </span>
      </td>
      <td class='delete-cell'>
      <input type='checkbox' value=${food.id}>
      </input>
      </td>
      </tr>`)
    })
  }

  static addNewMealFoodToTable(meal, food) {
    $(`#${meal.name}-table`).append(
      `<tr class='tbl-row'>
      <td class='cell-one food-cell'>
      <span class='replaceme-name'>`
      + food.name
      + `</span>
      </td>
      <td class='cell-two cal-cell' align='center'>
      <span class='replaceme-cal'>`
      + food.calories
      + `</span>
      </td>
      <td class='delete-cell'>
      <button class='delete-food-btn'>
      <img class='delete-food-img' src='lib/images/delete_red.png'/>
      </button>
      </td>
      <td class='meal-id' style='visibility:hidden;'>`
      + meal.id
      + `</td>
      <td class='food-id' style='visibility:hidden;'>`
      + food.id
      + `</td>
      </tr>`
    )
  }

  static rebuildFoodsTableAfterSort() {
    $('#food-table-container').append(
      `<table class="food-table sortable" id='meals-food-table'>
      <thead>
        <tr class='food-table-headers'>
          <th class="cell-one food-tbl-name-header">Name</th>
          <th class="food-tbl-cal-header">Calories</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>`
    )
  }
};

module.exports = HTMLHelper
