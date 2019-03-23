exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "flour" },
        { ingredient_name: "tomato sauce" },
        { ingredient_name: "Mozzerella Cheese" },
        { ingredient_name: "yeast" },
        { ingredient_name: "hamburger" },
        { ingredient_name: "bun" },
        { ingredient_name: "bacon" },
        { ingredient_name: "bbq sauce" },
        { ingredient_name: "ham" },
        { ingredient_name: "mustard" }
      ]);
    });
};
