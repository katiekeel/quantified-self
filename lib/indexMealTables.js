var $ = require('jQuery');

function createTables(meals) {
  console.log(meals)
}


$(document).ready(function(){
  function calorieColumnFinder() {
    var table = $('.tbod td:nth-child(2)');
    return calorieTotalUp(table)
  };
  calorieColumnFinder();
})

function calorieTotalUp(table){
  // table.forEach(function(row){
  // })
}

module.exports = {createTables}
