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
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/v1/foods"
  }).done()
  .catch(logErrors);
  }
