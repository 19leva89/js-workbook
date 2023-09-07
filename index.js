console.log(Array.from("Hello World"));

const obj = {
	0: "Hello",
	1: "World",
	2: "!!!",
	length: 3,
	prefix: "():"
}

const arr = Array.from(
	obj,
	function (elem, index) {
		return `${this.prefix}${elem}`;
	},
	obj
);

console.log(Array.isArray(arr));

console.log(Array.of(1, 2, 3, 4, 5, 6));
console.log([1, 2, 3, 4, 5, 6]);

const arr1 = [1, 2, 3];
const arr2 = [-7, 10, 5, 4];
console.log(Array.of(...arr1, ...arr2));

console.log([...arr1, ...arr2]);

console.log(arr1.at(1));

// arr1.push(10, 20, 30);
console.log(arr1.push(10, 20, 30)); // Повертає кількість ячеєк у масиві після додавання
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);

console.log(arr1.shift());
console.log(arr1);

console.log(arr1.unshift(0, 1));
console.log(arr1);

console.log(arr2.includes(5));

console.log(arr2.indexOf(6));
console.log(arr2.indexOf(50)); // Якщо значення неіснує, то повертає "-1" !!!

console.log(arr2.lastIndexOf(6));

const arr3 = arr1.concat(...arr2);
console.log(arr3);

arr3.copyWithin(2, 6, 8);
console.log(arr3);

arr3.fill("2", 6, 8);
console.log(arr3);

arr3.reverse();
console.log(arr3);

const fiterFn = (value, index, array) => value % 2 === 0;
const filtredArr = arr2.filter(fiterFn);
console.log(filtredArr);

const sortFn = (elem1, elem2) => elem1 - elem2;
// const sortFn = (elem1, elem2) => elem2 - elem1; // Сортування в інщу сторону 
const sortedArr = arr2.sort(sortFn);
console.log(sortedArr);

console.log(["Arabic", "Info", "Zero", "City", "Aaryt"].sort());


console.log(arr2.every((elem, index, array) => elem >= 0));

console.log(arr2.some((elem, index, array) => elem >= 0));