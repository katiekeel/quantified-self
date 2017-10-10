// var foods = require('./foods.js');
// var $ = require('jQuery');
//
// function fillMealsTableFunction(){
//   $(document).ready(function(){
//     $.ajax({
//         type: "get",
//         url: "http://localhost:3000/api/v1/foods"
//       }).done(function(post){
//         return foods.createMealsTable(foods.makeFoods(post));
//       })
//       .catch(foods.logErrors);
//       demo();
//   });
// }
// 
// function calorieTotals(){
//   var table = $('.tbod td:last-child');
// }
//
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
//
// async function demo() {
//   await sleep(1000);
//   calorieTotals();
// }
