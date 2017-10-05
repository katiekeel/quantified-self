pry = require("pryjs");
const Food = require("../lib/food");
const makeFoods = require("../lib/foods").makeFoods;
const createFoodsTable = require("../lib/foods").createFoodsTable;
const assert = require("chai").assert;

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
  context("Foods.js", function(){
    
  })
});

[
{
id: 1,
name: "Banana",
calories: 150
},
{
id: 2,
name: "Bagel Bites - Four Cheese",
calories: 650
},
{
id: 3,
name: "Chicken Burrito",
calories: 800
},
{
id: 4,
name: "Grapes",
calories: 180
},
{
id: 5,
name: "Blueberry Muffins",
calories: 450
},
{
id: 6,
name: "Yogurt",
calories: 550
},
{
id: 7,
name: "Macaroni and Cheese",
calories: 950
},
{
id: 8,
name: "Granola Bar",
calories: 200
},
{
id: 9,
name: "Gum",
calories: 50
},
{
id: 10,
name: "Cheese",
calories: 400
},
{
id: 11,
name: "Fruit Snacks",
calories: 120
},
{
id: 12,
name: "Apple",
calories: 220
}
]
