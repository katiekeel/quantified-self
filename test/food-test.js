pry = require("pryjs");
const Food = require("../lib/food");
const makeFoods = require("../lib/foods").makeFoods;
const assert = require("chai").assert;
require('jsdom-global')()
global.$ = require('jquery');


describe("Food.js and Foods.js tests", function(){
  context("Food.js", function(){
    var food = new Food({
      id: 6,
      name: "Yogurt",
      calories: 550
    });
    it("creates a Food object given a hash with name and calories", function(){
      assert.isObject(food)
    })
    it("can call name, calories", function(){
      assert.equal("Yogurt", food.name)
      assert.equal(550, food.calories)
    })
  });
});
