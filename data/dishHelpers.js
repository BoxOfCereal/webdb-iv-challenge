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
	},
	getRecipes: () => {
		return db
			.select("recipe_name", "dish_name")
			.from("recipes")
			.innerJoin("dishes", "recipes.dish_id", "dishes.id");
	},

	addRecipe: (recipe, quantities) => {
		let res;
		return db
			.transaction(function(t) {
				return db("recipes")
					.transacting(t)
					.insert(recipe)
					.then(function(response) {
						//id of newly created recipe
						res = response[0];
						console.log("test", typeof res);
						const q = { ...quantities, recipe_id: res }; //put new id into quantites/join table
						console.log(q);
						return db("quantities")
							.transacting(t)
							.insert(q);
					})
					.then(t.commit)
					.catch(t.rollback);
			})
			.then(function() {
				// transaction suceeded, data written
				console.log("success", res);
			})
			.catch(function() {
				// transaction failed, data rolled back
				console.log("failed");
			});
	}
};
