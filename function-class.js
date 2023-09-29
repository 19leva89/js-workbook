class Person {
	constructor(name) {
		this.name = name;
	}

	test = () => {
		console.log("Hello world", this.name);
	};
}


class User extends Person {
	constructor(login, password) {
		super(login);

		this.login = login;
		this.password = password;
	}

	login = null;
	password = null;
	#role = null;
	static age = null;

	id = null;
	#id = 1000;

	isAdmin = () => {
		return this.role === "Admin";
	};

	veryfy(user1, user2) {
		return user1.login === user2.login;
	}

	#createAdminUser = (login) => {
		return new User()
	}

	static generateRandomPassword = () => {
		return "gen pass"
	};

	get admin() {
		return this.#role === "Admin"
	}

	set admin(value) {
		this.#role = "Admin";
	}

};

const user = new User('Ivan', 'qwerty123456');

console.log(User.prototype === user.__proto__);
console.log(User.prototype.isPrototypeOf(user));

console.log(user);
console.log(user.isAdmin());


function verifyAdmin(fn) {
	const result = fn();

	if (!result) {
		throw new Error("Не адмін");
	}

	return true;
}

// verifyAdmin(user.isAdmin);

console.log(User.generateRandomPassword());

console.log(user.admin);  // false
user.admin = true;
console.log(user.admin);  // true

console.log(user);

console.log(user.test());

console.log(user instanceof User);