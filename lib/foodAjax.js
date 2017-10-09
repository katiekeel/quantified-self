$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(post){
    createFoodsTable(makeFoods(post));
  })
  .catch(logErrors)
});


function postAjax(formattedFood) {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/foods',
    data: formattedFood,
    dataType: "json",
    success: function mediaData(data){
      addNewFoodToTable(data);
    }
  })
}

function editAjax(food) {
  $.ajax({
    method: 'PATCH',
    url: 'http://localhost:3000/api/v1/foods/' + food.id,
    data: {food: {name: food.name, calories: food.calories}}
  }).done()
  .catch(logErrors);
}

function deleteAjax(id) {
  $.ajax({
    method: 'DELETE',
    url: "http://localhost:3000/api/v1/foods/" + id,
  }).done()
  .catch(logErrors)
}
