const Food = require('./foods');

$(function() {
  $('#add-foods').on('submit', function(e) {
      e.preventDefault()
      food = $("#add-foods :input").serializeArray()
      createFoods(food)
  })
});


function createFoods(food) {
  console.log(food);
  new Food(food[0].value, food[1].value);
};
