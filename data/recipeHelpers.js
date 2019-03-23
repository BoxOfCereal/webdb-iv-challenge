const knex = require("knex");
const dbConfig = require("../knexfile.js");
const db = knex(dbConfig.development);

module.exports = {
	getShoppingListFrom: id => {
		return db
			.select("ingredient_name", "quantity", "unit")
			.from("recipes")
			.where({ "recipes.id": id })
			.innerJoin("dishes", "recipes.dish_id", "=", "dishes.id")
			.innerJoin("quantities", "quantities.recipe_id", "=", "recipes.id")
			.innerJoin(
				"ingredients",
				"ingredients.id",
				"=",
				"quantities.ingredient_id"
			);
	}
};
