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



const arr = ["Apple", "Hotdog", "Bread", "Milk"];
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