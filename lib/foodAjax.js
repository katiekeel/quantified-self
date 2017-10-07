$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(post){
    createFoodsTable(makeFoods(post));
  })
  .catch(logErrors)
});


function postAjax(newFood) {
  console.log(newFood)
  $.ajax({
    method: "POST",
    url: 'http://localhost:3000/api/v1/foods',
    data: {food: {name: newFood.name, calories: newFood.calories}}
  }).done()
  .catch(logErrors);
  }
