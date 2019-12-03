

// TODAY: JavaScript








let shoppingList = {
	burgers: [
		{ name: "Flatter burger",
		  price: 65 },
		{ name: "Fat burger",
		  price: 70 },
		{name: "Flat burger",
		 price: 25 }
	],
	drinks: {
		1: { name: "Trocadero",
		  price: 20 },
		2: { name: "Trocadero",
		  price: 20 },
	}
}

let sl = shoppingList

sl .burgers  [1].price = 20;
sl["burgers"][1].price = 30;

let lookFor = "burgers"

sl[lookFor][1].price = 20;
sl.drinks[1].price = 10;

// summing 1
sl.burgers.reduce((acc, cur) => acc + cur.price, 0);

// summing 2
let sumTotal = 0;
for (let i = 0; i < sl.burgers.length; i += 1) {
	sumTotal += sl.burgers[i].price;
}

// as an object function
sl.total = function () {
	let price = 0;
	for (let i = 0; i < this.burgers.length; i += 1) {
		price += this.burgers[i].price;
	}
	return price;
}

// what happens if we redeclare shoppingList?
shoppingList = {
	burgers: [
		{ name: "Flatter burger",
		  price: 65 },
		{ name: "Fat burger",
		  price: 70 },
		{name: "Flat burger",
		 price: 35 }
	],
	drinks: [
		{ name: "Trocadero",
		  price: 20 },
		{ name: "Trocadero",
		  price: 20 },
	],
	total: function () {
		let price = 0;
		for (let i = 0; i < this.burgers.length; i += 1) {
			price += this.burgers[i].price;
		}
		return price;
	},
	addBurger: function (name, price) {
		this.burgers.push({name: name, price: price});
	}
}

// => sl != shoppingList