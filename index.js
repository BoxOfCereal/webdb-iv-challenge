const db = require("./data/dishHelpers.js");

db.getDishes().then(dishes => {
	console.log(dishes);
});

db.addDish({ dish_name: "cake" }).then(dishes => {
	console.log(dishes);
});
