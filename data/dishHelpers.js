const knex = require("knex");
const dbConfig = require("../knexfile.js");
const db = knex(dbConfig.development);

module.exports = {
	getDishes: () => {
		return db("dishes");
	},
	addDish: dish => {
		return db("dishes")
			.insert(dish)
			.then(ids => ids[0]);
	},
	getDish: id => {
		return db
			.select("dish_name", "recipe_name")
			.from("dishes")
			.where({ "dishes.id": id })
			.innerJoin("recipes", "recipes.dish_id", "dishes.id");
	}
};
