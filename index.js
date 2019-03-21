const db = require("./data/dishHelpers.js");

db.getDishes().then(dishes => {
	console.log(dishes);
});
