$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(function(post){
    createFoodsTable(makeFoods(post));
  })
  .catch(logErrors)
});
