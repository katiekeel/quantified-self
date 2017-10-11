var $ = require('jQuery');

$(document).ready(function(){
  function calorieColumnFinder() {
    var table = $('.tbod td:nth-child(2)');
    return calorieTotalUp(table)
  };
  calorieColumnFinder();
})

function calorieTotalUp(table){
  return table.forEach(function(row){
  })
}
