var $ = require('jQuery');
var ajaxCalls = require('./foodAjax.js');

function deleteFood() {
  $('#food-table').on('click', '.delete-food-btn', function(e){
      $(this).closest('tr').remove()
      let id = $(this).closest('tr').find('td.food-id').text();
      ajaxCalls.deleteAjax(id);
    });
}

deleteFood();
