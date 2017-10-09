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


function createFoodsTable(unsortedFoods){
  foodsArray = sortFoodsArray(unsortedFoods);
  foodsArray.forEach(function(food){
    $(".food-table").append(foodString(food))
  });
  deleteFood();
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

function deleteFood() {
  $('.delete-food-btn').on("click", function(e){
    $(this).closest('tr').remove()
    let id = $(this).closest('tr').find('td.food-id').text();
    deleteAjax(id);
  });
}

function sortFoodsArray(unsortedFoods) {
  sortedFoods = unsortedFoods.sort(function(a, b) {
    return (b.id) - (a.id);
  });
  return sortedFoods
}

$('#add-foods').on('submit', addFoods)
