exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: "1", ingredient_id: "1", quantity: 3 },
        { recipe_id: "1", ingredient_id: "2", quantity: 4 },
        { recipe_id: "1", ingredient_id: "4", quantity: 6 },
        { recipe_id: "2", ingredient_id: "2", quantity: 3 },
        { recipe_id: "2", ingredient_id: "3", quantity: 4.6 },
        { recipe_id: "2", ingredient_id: "4", quantity: 5.4 },
        { recipe_id: "2", ingredient_id: "5", quantity: 11.5 }
      ]);
    });
};
