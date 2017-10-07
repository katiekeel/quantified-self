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
    editFoodsWithData(parseInt(id), name, parseInt(calories))
  }
};

function editFoodsWithData(id, name, calories){
  var newFood = {id: id, name: name, calories: calories};
  newFood = new Food(newFood);
  $.ajax({
    method: 'PATCH',
    url: 'http://localhost:3000/api/v1/foods/' + id,
    data: {food: {name: newFood.name, calories: newFood.calories}}
  }).done(function(){
  }).catch(logErrors);
};

$(document).on('blur', 'td.food-cell', nameEdit);
$(document).on('blur', 'td.cal-cell', calorieEdit);
