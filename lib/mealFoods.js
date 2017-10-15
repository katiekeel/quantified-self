var HTMLHelper = require('./htmlHelper.js');

function createAddFoodTable(foods) {
  HTMLHelper.createFoodsMealsTable(foods, "#meals-food-table tbody")
}

module.exports = {createAddFoodTable}
