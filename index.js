// =========================================================
// ОДИНОЧКА
// =========================================================

class RecentPurchases {
	static #instance = null;

	constructor() {
		this.purchases = [];
	}

	static create() {
		if (!this.#instance) {
			this.#instance = new RecentPurchases();
		}

		return this.#instance;
	}

	add(item) {
		this.purchases.push(item);
	}

	get() {
		return this.purchases;
	}
}

const lastPurchaseList = RecentPurchases.create();

// =========================================================

const lastPurchaseList2 = RecentPurchases.create();

console.log(lastPurchaseList === lastPurchaseList2);   // true

lastPurchaseList2.add("Телефон");
lastPurchaseList2.add("Навушники");
console.log(lastPurchaseList.get()); // добавили в lastPurchaseList2, а отримали в lastPurchaseList



// =========================================================
// ФАБРИКА
// =========================================================
class Button {
	constructor({ text, color }) {
		this.text = text;
		this.color = color;
	}

	render() {
		return `<button class="color:${this.color};">${this.text}</button>`;
	}
}

class IconButton {
	constructor({ icon, color }) {
		this.icon = icon;
		this.color = color;
	}

	render() {
		return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
	}
}

class ButtonFactory {
	static TYPE = {
		BASIC: "basic",
		ICON: "icon",
	};

	static createButton(type, options) {
		if (options.icon) {
			return new IconButton(options);
		}

		if (options.text) {
			return new Button(options);
		}

		throw new Error(`Такого типу кнопки не існує: ${type}`);

		// або
		// switch (type) {
		// 	case this.TYPE.BASIC:
		// 		return new Button(options);
		// 	case this.TYPE.ICON:
		// 		return new IconButton(options);
		// 	default:
		// 		throw new Error(`Такого типу кнопки не існує: ${type}`);
		// }
	}
}

const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, { color: 'red', icon: '/icon/my-icon.svg' });

console.log(myIconButton);



// =========================================================
// СПОСТЕРІГАЧ
// =========================================================
class User {
	constructor(email) {
		this.email = email;
	}

	sendEmail(message) {
		console.log(`Відправка на email ${this.email} повідомлення: ${message}`);
	}
}

class Video {
	constructor(name) {
		this.name = name;
	}
}

class Channel {
	constructor(name) {
		this.name = name;
		this.subscribers = [];
	}

	subscribe(user) {
		// Підписка на канал
		this.subscribers.push(user);
	}

	unsubscribe(user) {
		// Відписка від каналу
		this.subscribers = this.subscribers.filter((sub) => sub !== user);
	}

	createVideo(name) {
		// Створення нового відео
		const video = new Video(name);
		this.sendNotify(video);
	}

	sendNotify(video) {
		// Відправка повідомлення підписникам про нове відео
		this.subscribers.forEach((subscriber) => {
			subscriber.sendEmail(`Нове відео "${video.name}" на Youtube каналі ${this.name}!`);
		});
	}
}

// Тестування
const channel = new Channel("IT Brains");

const user1 = new User("john@example.com");
const user2 = new User("jane@example.com");
const user3 = new User("alice@example.com");

channel.subscribe(user1);
channel.subscribe(user2);
channel.subscribe(user3);

channel.createVideo("Урок по HTML");

console.log("===============================");

channel.unsubscribe(user1);
channel.createVideo("Урок по CSS");



// =========================================================
// ДЕКОРАТОР
// =========================================================
class Coffee {
	name = "Кава";
	cost = 10;

	cook() {
		console.log(`Приготування ${this.name}`);
		// Логіка приготування кавового напою
	}
}

class MilkDecorator {
	constructor(coffee, amount) {
		this.coffee = coffee;
		this.amount = amount;
	}

	get name() {
		return `${this.coffee.name}, з ${this.amount} мл молока`;
	}

	get cost() {
		const milkPrice = 0.05;
		return this.coffee.cost + milkPrice * this.amount;
	}

	cook() {
		console.log(`Приготування ${this.name}`);
		// Логіка приготування кавового напою
	}
}

// Тестування
console.log("===============================");
// Створення об'єкту базової кави
let coffee = new Coffee();
console.log(coffee.name);
console.log(coffee.cost);
coffee.cook();

// Додавання декоратора молока до кави
let latteCoffee = new MilkDecorator(coffee, 300);
console.log(latteCoffee.name);
console.log(latteCoffee.cost);
latteCoffee.cook();



// =========================================================
// МЕМЕНТО
// =========================================================
class TextEditor {
	#text = "";

	set text(text) {
		this.#text = text;
		this.#save();
	}

	get text() {
		return this.#text;
	}

	#save() {
		Snapshot.create(this.text);
	}

	restore() {
		this.#text = Snapshot.restore().text;
	}
}

class Snapshot {
	constructor(text) {
		this.text = text;
	}

	static #snapshots = [];

	static create(text) {
		this.#snapshots.push(new Snapshot(text));
	}

	static restore() {
		this.#snapshots.pop();
		return this.#snapshots[this.#snapshots.length - 1];
	}
}

// Тестування
const editor = new TextEditor();

editor.text = "Це початковий текст."
editor.text = "Редагований текст."
editor.text = "Оновлений текст."

console.log("===============================");

console.log(editor.text);											// Оновлений текст.

editor.restore();
console.log(editor.text);											// Редагований текст.

editor.restore();
console.log(editor.text);											// Це початковий текст.



// =========================================================
// ЛАНЦЮЖОК ВІДПОВІДАЛЬНОСТІ
// =========================================================
class AuthHandler {
	setNextHandler(handler) {
		this.nextHandler = handler;
		return handler;
	}

	login(user, password) {
		if (this.nextHandler) {
			return this.nextHandler.login(user, password);
		} else {
			return false;
		}
	}
}

class TwoFactorAuthHandler extends AuthHandler {
	login(user, password) {
		if (user === "john" && password === "password" && this.isValidTwoFactorCode()) {
			console.log("Вхід дозволено з двофакторною автентифікацією");
			return true;
		} else {
			return super.login(user, password);
		}
	}

	isValidTwoFactorCode() {
		return true;
	}
}

class RoleHandler extends AuthHandler {
	login(user, password) {
		if (user === "guest") {
			console.log("Вхід дозволено з роллю гостя");
			return true;
		} else {
			return super.login(user, password);
		}
	}
}

class CredentialsHandler extends AuthHandler {
	login(user, password) {
		if (user === "admin" && password === "admin123") {
			console.log("Вхід дозволено за логіном та паролем");
			return true;
		} else {
			return super.login(user, password);
		}
	}
}

class HandlerBuilder {
	constructor() {
		this.firstHandler = null;
		this.lastHandler = null;
	}

	add(handler) {
		if (!this.firstHandler) {
			this.firstHandler = handler;
			this.lastHandler = handler;
		} else {
			this.lastHandler.setNextHandler(handler);
			this.lastHandler = handler;
		}
		return this;
	}

	create() {
		return this.firstHandler;
	}
}

// Тестування
const handler = new TwoFactorAuthHandler();
const handler2 = new CredentialsHandler();

handler2.setNextHandler(new RoleHandler());
handler.setNextHandler(handler2);

handler.login("guest", "admin123");					// Вхід дозволено з роллю гостя
handler.login("admin", "admin123");					// Вхід дозволено за логіном та паролем


const handlerBuilder = new HandlerBuilder();

console.log("===============================");

const handler3 = handlerBuilder
	.add(new CredentialsHandler())
	.add(new TwoFactorAuthHandler())
	.add(new RoleHandler())
	.create();

handler.login("admin", "admin123");					// Вхід дозволено за логіном та паролем
handler.login("john", "password");					// Вхід дозволено з двофакторною автентифікацією
handler.login("guest", "guest123");					// Вхід дозволено з роллю гостя
handler.login("user", "password");					// Вхід заборонено



// =========================================================
// МІСТ
// =========================================================