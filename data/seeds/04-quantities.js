exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("quantities")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("quantities").insert([
        { recipe_id: 1, ingredient_id: 1, unit: "cups", quantity: 3.5 },
        { recipe_id: 1, ingredient_id: 2, unit: "oz", quantity: 16.0 },
        { recipe_id: 1, ingredient_id: 3, unit: "cups", quantity: 2.0 },
        { recipe_id: 1, ingredient_id: 4, unit: "oz", quantity: 0.5 },
        { recipe_id: 2, ingredient_id: 5, unit: "oz", quantity: 10.0 },
        { recipe_id: 2, ingredient_id: 6, unit: "slices", quantity: 2.0 },
        { recipe_id: 2, ingredient_id: 7, unit: "gal", quantity: 1.0 },
        { recipe_id: 3, ingredient_id: 8, unit: "lbs", quantity: 2.0 },
        { recipe_id: 3, ingredient_id: 9, unit: "gal", quantity: 2.0 }
      ]);
    });
};
