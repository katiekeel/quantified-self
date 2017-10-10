$(document).ready(function(){
  $.ajax({
      type: "get",
      url: "http://localhost:3000/api/v1/foods"
    }).done(function(post){
      createMealsTable(makeFoods(post));
    })
    .catch(logErrors);
    demo();
});

function calorieTotals(){
  var table = $('.tbod td:last-child');
  debugger
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(1000);
  calorieTotals()
}
