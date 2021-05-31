var products = [
	{
		name: "Trail Mix",
		lactose_intolerant: true,
		contains_nuts: true,
		Lactose_and_tolerant: false,
		organic: false,
		price: 1.00
	},
	{
		name: "Brocoli",
		lactose_intolerant: true,
		contains_nuts: false,
		Lactose_and_tolerant: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Chocolate",
		lactose_intolerant: true,
		contains_nuts: true,
		Lactose_and_tolerant: false,
		organic: true,
		price: 2.00
	},
	{
		name: "Bread",
		lactose_intolerant: true,
		contains_nuts: false,
		Lactose_and_tolerant: true,
		organic : false,
		price: 2.35
	},
	{
		name: "Banana",
		lactose_intolerant: true,
		contains_nuts: false,
		Lactose_and_tolerant: true,
		organic: true,
		price: 3.00
	},
	{
		name: "Peanut Butter",
		lactose_intolerant: true,
		contains_nuts: true,
		Lactose_and_tolerant: false,
		organic: false,
		price: 4.00
	},
	{
		name: "Milk",
		lactose_intolerant: false,
		contains_nuts: false,
		Lactose_and_tolerant: false,
		organic: false,
		price: 5.00
	},
	{
		name: "Cheese",
		lactose_intolerant: false,
		contains_nuts: false,
		Lactose_and_tolerant: false,
		organic: false,
		price: 6.00
	},
	{
		name: "Pizza",
		lactose_intolerant: false,
		contains_nuts: false,
		Lactose_and_tolerant: false,
		organic: false,
		price: 8.00
	},
	
	{
		name: "Steak",
		lactose_intolerant: true,
		contains_nuts: false,
		Lactose_and_tolerant: true,
		organic: false,
		price: 15.00
	},
	
	
	
	
	
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	debugger;
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((organic == "Organic") && (prods[i].organic == true)){
			if ((restriction == "Lactose Intolerant") && (prods[i].lactose_intolerant == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Nut Free") && (prods[i].contains_nuts == false)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Lactose Intolerant and Nut Free") && (prods[i].Lactose_and_tolerant == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
		else if ((organic == "Non-Organic") && (prods[i].organic == false)){
			if ((restriction == "Lactose Intolerant") && (prods[i].lactose_intolerant == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Nut Free") && (prods[i].contains_nuts == false)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Lactose Intolerant and Nut Free") && (prods[i].Lactose_and_tolerant == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
		
		
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
function getPrice(product) {
	
	for (let i=0; i<products.length; i+=1) {
		if (product.indexOf(products[i].name) > -1){
			return products[i].price;
		}
	}
	return 0;
}