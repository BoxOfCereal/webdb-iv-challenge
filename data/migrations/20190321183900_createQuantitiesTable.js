exports.up = function(knex, Promise) {
	return knex.schema.createTable("quantities", table => {
		table.increments();
		table
			.integer("recipe_id")
			.notNullable()
			.unsigned()
			.references("id")
			.inTable("recipes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table
			.integer("ingredient_id")
			.notNullable()
			.unsigned()
			.references("id")
			.inTable("ingredients")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table
			.enu("unit", [
				"tbls",
				"tsps",
				"cups",
				"qt",
				"pt",
				"gal",
				"oz",
				"lbs",
				"g",
				"ml",
				"l",
				"slices"
			])
			.notNullable();
		table.float("quantity", 2).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("quantities");
};
