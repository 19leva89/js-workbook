const userIdList = new Set([40132, 48756, 23658, 45896]);
console.log(userIdList);

for (const value of userIdList) {
	console.log(value);
}

userIdList.forEach((value, key, set) => console.log(value));

console.log(userIdList.size);

userIdList.add(40132);
console.log(userIdList);
userIdList.add(40133);
console.log(userIdList);

console.log(userIdList.delete(40133));
console.log(userIdList);

console.log(userIdList.has(40133));
console.log(userIdList);

// userIdList.clear();
console.log(userIdList);

const key = userIdList.keys();
console.log(key);

const value = userIdList.values();
console.log(value);

const entrie = userIdList.entries();
console.log(entrie);

const obj = Object.fromEntries(entrie);
console.log(obj);

const valueList = userIdList.values();
const arr = Array.from(valueList);
console.log(arr);



const arr2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set = new Set(arr2);
const arr3 = [...set];
console.log(arr3);
// або
const arr4 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set2 = new Set(arr2);
const arr5 = Array.from(set2.values())
console.log(arr5);



const categoryList = new Set();
function addCategory(category) {
	if (categoryList.has(category)) {
		console.log('Ця категорія вже є');
		return false;
	}

	categoryList.add(category);
	return true;
}
console.log(addCategory("Спорт"));
console.log(addCategory("Спорт"));
console.log(addCategory("Їжа"));



const students = [
	{ id: 1, name: "John", course: "Math" },
	{ id: 2, name: "Jane", course: "Science" },
	{ id: 3, name: "Adam", course: "Math" },
	{ id: 4, name: "Eve", course: "English" },
	{ id: 5, name: "Kate", course: "Science" },
];
const course = students.map((student) => student.course);
console.log(course);
const studentsList = new Set(course);
console.log(studentsList);
console.log(Array.from(studentsList));