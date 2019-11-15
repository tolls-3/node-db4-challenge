exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .unique()
        .notNullable();
    })

    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name", 128)
        .unique()
        .notNullable();
    })

    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE");
      tbl
        .float("quantity")
        .unsigned()
        .notNullable();
    })

    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE");
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl.string("instruction", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
