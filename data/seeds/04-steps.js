exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          instruction: "Take the dough out and roll it into a circle"
        },
        {
          recipe_id: 1,
          step_number: 2,
          instruction:
            "Puff out the edge of the dough so the crust is thicker at the edge"
        },
        {
          recipe_id: 1,
          step_number: 3,
          instruction:
            "Pre-heat oven to 250-260 degrees C. (Remember to put a pizza stone in the oven)"
        },
        {
          recipe_id: 1,
          step_number: 4,
          instruction: "Put on the pizza sauce, cheese, and toppings."
        },
        {
          recipe_id: 1,
          step_number: 5,
          instruction: "Put the pizza on the pizza stone in the oven."
        },
        {
          recipe_id: 2,
          step_number: 1,
          instruction: "Boil water in a large pot"
        },
        {
          recipe_id: 2,
          step_number: 2,
          instruction: "Salt the water with at least a tablespoon—more is fine"
        },
        { recipe_id: 2, step_number: 3, instruction: "Add pasta" },
        { recipe_id: 2, step_number: 4, instruction: "Stir the pasta" },
        {
          recipe_id: 2,
          step_number: 5,
          instruction: "Test the pasta by tasting it"
        },
        { recipe_id: 2, step_number: 6, instruction: "Drain the pasta" }
      ]);
    });
};
