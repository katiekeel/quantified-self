var $ = require('jQuery')

$(document).ready(function() {
  $.get("http://localhost:3000/api/v1/foods")
    .then(appendFoods)
    .catch(errorLog)
});

const appendFoods = (foods) => {
  foods.forEach(function(food) {
    console.log(food)
  });
};

const errorLog = (error) => {
  console.error(error)
};
