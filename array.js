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



const userList = [
	{ id: 10, name: "Dima", age: 19 },
	{ id: 32, name: "Ivan", age: 35 },
	{ id: 15, name: "Roman", age: 41 },
];

let age = 0;
let minAge = 30;

const userSortAge = userList.sort((user1, user2) => {
	return user2.age - user1.age;
});

const userBigAge = userList.find(({ age: userAge }, index, arr) => {
	if (userAge > age) {
		age = userAge;
	}
});

console.log(userSortAge);
console.log(userSortAge[0]);

console.log(age);

const userFindAge = userList.find(({ age }) => age >= minAge);
console.log(userFindAge);

const userFindIndexAge = userList.findIndex(({ age }) => age >= minAge);
console.log(userFindIndexAge);

const userFindLastAge = userList.findLast(({ age }) => age >= minAge);
console.log(userFindLastAge);

const userFindLastIndexAge = userList.findLastIndex(({ age }) => age >= minAge);
console.log(userFindLastIndexAge);



// const iter = (userList.keys());
const iter = (userList.values());

const result = iter.next();
console.log(result);

for (const elem of iter) {
	console.log(elem);
}



const arr4 = ["Apple", "Hotdog", "Bread", "Milk"];
console.log(arr.toString());
console.log((', '));
console.log(arr.join('... '));


const arrSmall = arr.splice(1, 2, "Tea", "Cheese", ...userList);
const arrBig = [...arr].splice(1, 2, ...userList);
console.log(arr);
console.log(arrSmall);
console.log(arrBig);

const arrSmall2 = arr.slice(1, 3);
console.log(arrSmall2);

const result2 = userList.reduce((num, user, userIndex, arr) => {
	console.log(num, user.age);
	return user.age > num ? user.age : num;
}, 1);
console.log(result2);



const result3 = userList.map((user, index, arr) => {
	return user.name;
})
console.log(result3.join(", "));



const flatArray = [[[[[[[[[[[100]]]]]]]]]]];
console.log(flatArray.flat(50));


result3.forEach((element, index, arr) => {
	console.log(element);
});