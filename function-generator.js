function* myGenerator() {
	console.log("Start");
	yield 1;
	yield 2;
	yield 3;
	console.log("End");
}

const generator = myGenerator();
const result1 = generator.next();
console.log(result1);									// { value: 1, done: false }

const result2 = generator.next();
console.log(result2);									// { value: 2, done: false }

const result3 = generator.next();
console.log(result3);									// { value: 3, done: false }

const result4 = generator.next();
console.log(result4);									// { value: undefined, done: true }

console.log(generator);								// Object [Generator] {}
console.log(generator.value);
console.log(generator.done);

console.log('==================================');

function* processOrder() {
	yield validateOrder(order);
	yield processPayment(order);
	yield sendOrderConfirmation(order);
	return order;
}

function validateOrder(order) {
	const isValid = order.quantity > 0;
	return isValid;
}

function processPayment(order) {
	const isPaymentSuccessful = Math.random() < 0.5;
	return isPaymentSuccessful;
}

function sendOrderConfirmation() {
	const isConfirmationSent = true;
	return isConfirmationSent;
}

const order = { id: 123, product: "Товар", quantity: 2 };
const orderProcessing = processOrder(order);

console.log(orderProcessing.next());
console.log(orderProcessing.next());
console.log(orderProcessing.next());
console.log(orderProcessing.next());

console.log('==================================');

function* generatorFunction() {
	yield "First value";
	yield "Second value";
}

const generator2 = generatorFunction();

for (let value of generator2) {
	console.log(value);
}

console.log('==================================');

function* generatorOne() {
	yield "1 1";
	yield "1 2";
}

function* generatorTwo() {
	yield* generatorOne();
	yield "2 1";
	yield "2 2";
}

const generator3 = generatorTwo();

console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());

console.log('==================================');

function* myGenerator2() {
	yield 1;
	const value = yield 2;
	yield 3;
	yield value;
}

const generator4 = myGenerator2();

console.log(generator4.next().value);
console.log(generator4.next().value);
console.log(generator4.next(4).value);
console.log(generator4.next().value);

console.log('==================================');

async function* asyncGenerator() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	yield "After 1 second";
	await new Promise((resolve) => setTimeout(resolve, 1000));
	yield "After 2 second";
}

async function runGenerator() {
	const generator5 = asyncGenerator();
	console.log((await generator5.next()).value);
	console.log((await generator5.next()).value);
}

runGenerator();