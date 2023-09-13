const button = new Map([
	["color", "red"],
	["size", "32px"]
]);
console.log(button);


const obj = {
	color: "red",
	size: 32 + "px"
}
const button2 = new Map(Object.entries(obj));
console.log(button2);


const set = new Set(
	["red", "32px"]
);
const button3 = new Map(set.entries());
console.log(button3);


console.log(button3.entries());


const set2 = new Set(button.keys());
const set3 = new Set(button.values());
console.log(set2);
console.log(set3);


for (const [key, value] of button) {
	console.log(key, value);
}

for (const value of button) {
	console.log(value);
}

for (const value in Object.fromEntries(button.entries())) {
	console.log(value);
}

button.forEach((value, key, map) => console.log(value, key, map));


console.log(button.size);


button.set("weight", 600);
console.log(button);


console.log(button.get("weight"));


console.log(button.delete("weight"));
console.log(button.delete("weight"));
console.log(button);


console.log(button.has("weight"));
console.log(button.has("color"));


button.clear();
console.log(button);



const LANG_LIST = {
	UA: 'uk-UA',
	EU: 'eu-US'
};
const activeLang = LANG_LIST.UA;
const product = {
	price: 100,
	amount: 3,
	info: new Map([
		[
			LANG_LIST.UA,
			{
				title: "Заголовок",
				info: "Інформація"
			},
		],
		[
			LANG_LIST.EU,
			{
				title: "Title",
				info: "info"
			},
		],
	]),
};
const info = product.info.get(activeLang);
console.log(info);
console.log(product.info.has(activeLang));



const user1 = {
	id: 1323,
	name: "Ivan"
};
const user2 = {
	id: 4231,
	name: "Anton"
};
const product1 = {
	id: 5314,
	title: "Mobile phone"
};
const product2 = {
	id: 5335,
	title: "Apple"
};
const userProduct = new Map();
userProduct.set(user1, product1).set(user2, product2);
console.log(userProduct);
console.log(userProduct.has(user1));
console.log(userProduct.get(user1));

const productClientList = new Map([[product1, new Set()]]);
productClientList.set(product1, productClientList.get(product1).add(user1));
console.log(productClientList);

const has = productClientList.get(product1).has(user1);
console.log(has);