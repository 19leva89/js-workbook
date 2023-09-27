// const User = {
// 	login: null,
// 	password: null,
// 	role: null,
// 	age: null,
// };

// function createUser({ login, password, isAdmin }) {
// 	return Object.create(User, {
// 		login: {
// 			value: login,
// 		},
// 		password: {
// 			value: password,
// 		},
// 		role: {
// 			value: isAdmin ? "Admin" : "User",
// 		},
// 		verify: {
// 			value(password) {
// 				return this.password === password;
// 			},
// 		}
// 	});
// }
// або
function User(data) {
	if (new.target) {
		const { login = null, password = null, isAdmin = null, age = 0 } = data;

		const role = isAdmin ? "Admin" : "User";

		const object = Object.assign(this, {
			login,
			password,
			role,
			age,
		});

		if (role === "Admin") {
			object.verify = function (password) {
				return this.password === password;
			};
		};

		if (age >= 50) {
			object.login = String(object.login).toLocaleUpperCase()
		};

		Object.toString = function () {
			return `Користувач ${this.login}`;
		};

		return object;
	} else {
		return new User(data);
	}
}

// function UserAdmin({ login = null, password = null, isAdmin = null, age = 0 }) {
// 	this.login = login;
// 	this.password = password;
// 	this.role = isAdmin ? "Admin" : "User";
// 	this.age = age;

// 	this.verify = function(password) {
// 		return this.password === password;
// 	};
// }

// =============
const registerData = {
	login: "Ivan",
	password: "123qwerty321",
	isAdmin: true
};

// const user = Object.create(User, {
// 	login: {
// 		value: registerData.login,
// 	},
// 	password: {
// 		value: registerData.password,
// 	},
// 	verify: {
// 		value(password) {
// 			return this.password === password;
// 		},
// 	}
// });
// або
const user = new User(registerData)

User.prototype.test = "Hello world"
console.log(user.test);

console.log(user.verify("123qwerty321"));

// =============
const adminData = {
	login: "Ivan",
	password: "123qwerty321",
	isAdmin: true
};

// const adminUser = Object.create(User, {
// 	login: {
// 		value: registerData.login,
// 	},
// 	password: {
// 		value: registerData.password,
// 	},
// 	role: {
// 		value: adminData.isAdmin ? "Admin" : "User",
// 	},
// 	verify: {
// 		value(password) {
// 			return this.password === password;
// 		},
// 	}
// });
// або
const adminUser = new User(adminData)

console.log(adminUser.verify("123qwerty321"));

// =============
const testData = {
	login: "Ivan",
	password: "123qwerty321",
	age: 50,
};

const testUser = new User(testData)

console.log(testUser.login);

// =============

console.log(testUser === User);                                  // false
console.log(testUser.__proto__ === User);                        // false
console.log(testUser.__proto__ === User.prototype);              // true
console.log(Object.getPrototypeOf(testUser) === User.prototype); // true

console.log(user.toString());
console.log(User.lenght);
console.log(User.name);

// =============

const verifyUser = user.verify;
console.log(verifyUser.apply(user, ["123qwerty321"]));          // true

//або

const verifyUser2 = user.verify.bind(user, "123qwerty321");
console.log(verifyUser2());                                     // true

// =============

function Animal(name) {
	this.name = name;
}

function Person(name, age) {
	Animal.call(this, name);
	this.age = age;
}
const user2 = new Person("Ivan", 32);
console.log(user2.name);

// або

function Person2(name, age) {
	Animal.apply(this, [name]);
	this.age = age;
}
const user3 = new Person2("Dima", 30);
console.log(user3.name);

// або

const Person3 = function (name, age) {
	Animal.call(this, name);
	this.age = age;
}
const user4 = new Person2("Roma", 35);
console.log(user4.name);