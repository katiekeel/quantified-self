var $ = require('jQuery');
// var ajaxCalls = require('./foodAjax.js');
$(document).ready(function(){
  function deleteMealFood() {
    $('.meal-table').on('click', '.delete-food-btn', function(e){
      $(this).closest('tr').remove()
      // let id = $(this).closest('tr').find('td.food-id').text();
      // ajaxCalls.deleteAjax(id);
    });
  };
  deleteMealFood();
})
