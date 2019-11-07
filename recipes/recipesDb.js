const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes as r")
    .join("recipes_ingredients as rig", "r.id", "rig.recipe_id")
    .join("ingredients as in", "rig.ingredient_id", "in.id")
    .select("r.id", "r.recipe_name", "rig.quantity", "in.ingredient_name")
    .where({ "r.id": id });
}

function getInstructions(id) {
  return db("steps")
    .join("recipes", "recipes.id", "steps.recipe_id")
    .select("step_number", "instruction", "recipe_name")
    .where({ "recipes.id": id });
}
