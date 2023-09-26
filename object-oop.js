let Animal = {
	name: "Тварина",
	voice: "Звук",
	say() {
		console.log(`${this.name} каже ${this.voice}`)
	}
}

// const dog = { ...Animal };
const dog = Object.create(Animal);
dog.name = "Бобік";
dog.voice = "Гав";

dog.say();

console.log(dog);

Animal.go = function () {
	console.log(`${this.name} біжить`);
}
dog.go();

console.log(dog.__proto__); // або
console.log(Object.getPrototypeOf(dog));

console.log(Object.getPrototypeOf(dog) === Animal); // або
console.log(Animal.isPrototypeOf(dog));

// Object.setPrototypeOf(dog, null);
// console.log(Object.getPrototypeOf(dog));


Object.defineProperty(dog, "_age", {
	value: 5,
	writable: true
});

// dog.age = 10;
// console.log(dog.age); // 10
Object.defineProperty(dog, "age", {
	set(value) {
		this._age = value * 2;
	},
	get() {
		return `${this._age} років`;
	}
});

dog.age = 15;
console.log(dog.age);   // 30 років
console.log(dog._age);  // 30

// delete dog.age;
// console.log(dog.age); // undefined


Object.defineProperty(dog, "location", {
	value: "Ukraine",
	writable: true,
	configurable: true,
	enumerable: true
});

console.log(dog.location); // Ukraine
// delete dog.location;
// console.log(dog.location); // undefined


console.log(Object.keys(dog));

console.log(Object.getOwnPropertyDescriptor(dog, "age"));
console.log(Object.getOwnPropertyDescriptor(dog, "_age"));

console.log(dog.hasOwnProperty("say"));



const Tag = {
	render(value) {
		return `<>${value}<>`;
	}
}

const Button = Object.create(Tag);

Button.render = function (value = "") {
	return `<button style="${this.style}">${value}<button>`;
}

const mainButton = Object.create(Button, {
	style: {
		value: 'background: red;',
		writable: true
	}
});

console.log(mainButton.render("Click"));



const Input = Object.create(Tag);

Input.render = function () {
	return `<input placeholder="${this.placeholder}" style="${this.style}"/>`;
}

const loginInput = Object.create(Input, {
	style: {
		value: 'border: 1px solid red;',
		writable: true
	},
	placeholder: {
		value: 'Login...',
	}
});

console.log(loginInput.render());



const serverRequest = {
	data: null,
	sendData() {
		///...
	},
	render() {
		this.data = this.getData();

		return `...`
	}
}


const Page = {
	components: [],
	path: "/.../.../",
	render() {
		//.....
	},
}