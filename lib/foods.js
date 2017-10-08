const Food = require('./food');
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


function createFoodsTable(foodsArray){
  var foodsArray = foodsArray;
  foodsArray.forEach(function(food){
    $(".food-table").append("<tr class='tbl-row'><td class='cell-one food-cell' contenteditable='true'>"
    + "<span class='replaceme-name' contenteditable='true'>"
    + food.name
    + "</span>"
    + "</td><td class='cell-two cal-cell'>"
    + "<span class='replaceme-cal' contenteditable='true'>"
    + food.calories
    + "</span>"
    + "</td><td class='food-id' style='visibility:hidden;'>"
    + food.id
    + "</td><td class='delete-cell'><button class='delete-food-btn'><img class='delete-food-img' src='lib/images/delete_red.png'/></button></td></tr>");
  });

  $('.delete-food-btn').on("click", function(){
    $(this).closest('tr').remove()
    // let id = $(this).closest('tr').find('td.food-id').text();
    // $.ajax({
    //   method: 'DELETE',
    //   url: "http://localhost:3000/api/v1/foods/" + id,
    // }).done(function(post){
    //   debugger
    // })
    // .catch(logErrors)
  });
}

module.exports = {
  makeFoods : makeFoods,
}
