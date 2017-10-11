var $ = require('jQuery');

$(document).ready(function(){
  function calorieColumnFinder() {
    var table = $('.tbod td:nth-child(2)');
    debugger
    return calorieTotalUp(table)
  };
  calorieColumnFinder();
})

function calorieTotalUp(table){
  return table.each(function(key, val){
    console.log(val.innerText)
  })
}
