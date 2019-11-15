exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Cheese" },
        { ingredient_name: "Tomatoes" },
        { ingredient_name: "Pepper" },
        { ingredient_name: "Sausages" },
        { ingredient_name: "Salami" }
      ]);
    });
};
