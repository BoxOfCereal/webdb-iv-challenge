exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          dish_id: "1",
          recipe_name: "Deep Dish",
          recipe_instructions:
            "I want to roll a shaman. Are shamans good or are they trash that nobody wants inside parties at all? As in, are their buffs and totems worth it or nah?"
        },
        {
          dish_id: "2",
          recipe_name: "Texas Fire Burger",
          recipe_instructions:
            "I want to roll a shaman. Are shamans good or are they trash that nobody wants inside parties at all? As in, are their buffs and totems worth it or nah?"
        },
        {
          dish_id: "3",
          recipe_name: "Ham Chowder",
          recipe_instructions: "dear glob why?"
        }
      ]);
    });
};
