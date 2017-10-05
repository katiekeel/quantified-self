const Food = require("./food")
const makeFoods = require("./foods").makeFoods
const createFoodsTable = require("./foods").createFoodsTable
const logErrors = require("./foods").logErrors

$(document).ready(function(){
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/v1/foods"
  }).done(makeFoods)
  .catch(logErrors)
});
