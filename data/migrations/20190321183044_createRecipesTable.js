exports.up = function(knex, Promise) {
	return knex.schema.createTable("recipes", table => {
		table.increments();
		table
			.integer("dish_id")
			.notNullable()
			.unique()
			.unsigned()
			.references("id")
			.inTable("dishes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.string("recipe_name", 255).notNullable();
		table.string("recipe_instructions", 2000);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("recipes");
};
