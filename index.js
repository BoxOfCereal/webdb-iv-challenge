const db = require("./data/dishHelpers.js");

db.getDishes().then(dishes => {
	console.log(dishes);
});

// db.addDish({ dish_name: "cake" }).then(dishes => {
// 	console.log(dishes);
// });
db.getDish(1).then(dish => {
	console.log(dish);
});

db.getRecipes().then(recipes => {
	console.log(recipes);
});
