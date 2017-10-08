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
        console.log(data);
        addNewFoodToTable(data);
    }
  })
}
