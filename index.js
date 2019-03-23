const db = require("./data/dishHelpers.js");
const rdb = require("./data/recipeHelpers.js");

// db.getDishes().then(dishes => {
// 	console.log(dishes);
// });

// db.addDish({ dish_name: "cake" }).then(dishes => {
// 	console.log(dishes);
// });
// db.getDish(1).then(dish => {
// 	console.log(dish);
// });

// db.getRecipes().then(recipes => {
// 	console.log(recipes);
// });

// db.addRecipe(
// 	{
// 		dish_id: "3",
// 		recipe_name: "Better than Best Cake",
// 		recipe_instructions: "TEST?"
// 	},
// 	{ ingredient_id: 2, unit: "cups", quantity: 3.5 }
// );

rdb.getShoppingListFrom(1).then(list => {
	console.log(
		list.map(item => {
			return `${item.quantity} ${item.unit}s of ${item.ingredient_name}`;
		})
	);
});
