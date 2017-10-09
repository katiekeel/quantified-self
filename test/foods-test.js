pry = require("pryjs");
const Food = require("../lib/food");
const makeFoods = require("../lib/foods").makeFoods;
const assert = require("chai").assert;
require('jsdom-global')()
global.$ = require('jquery');


describe("Foods.js tests", function(){
  context("makeFoods", function(){
    it("makes Food objects from json hash", function(){
      var foodObjectArray = makeFoods(foodsArray)
      var bagelBites = foodObjectArray[1]
      assert.equal(12, foodObjectArray.length)
      assert.notInstanceOf(foodsArray[1], Food)
      assert.instanceOf(foodObjectArray[1], Food)
      assert.equal('Bagel Bites - Four Cheese', bagelBites.name)
      assert.equal(650, bagelBites.calories)
    })
  });
  var foodsArray = [
  {id: 1,name: "Banana",calories: 150},
  {id: 2,name: "Bagel Bites - Four Cheese",calories: 650},
  {id: 3,name: "Chicken Burrito",calories: 800},
  {id: 4,name: "Grapes",calories: 180},
  {id: 5,name: "Blueberry Muffins",calories: 450},
  {id: 6,name: "Yogurt",calories: 550},
  {id: 7,name: "Macaroni and Cheese",calories: 950},
  {id: 8, name: "Granola Bar",calories: 200},
  {id: 9,name: "Gum",calories: 50},
  {id: 10,name: "Cheese",calories: 400},
  {id: 11,name: "Fruit Snacks",calories: 120},
  {id: 12,name: "Apple",calories: 220}
  ];
});
