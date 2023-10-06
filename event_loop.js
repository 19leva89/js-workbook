function consoleLog() {
	const test = "Hello world";

	console.log("4");
	console.log("5");
	console.log("6");

	// return consoleLog();  //  RangeError: Maximum call stack size exceeded
}

console.log("1");
console.log("2");
console.log("3");

consoleLog();

for (let i = 0; i < 10; i++) {
	console.log(i);
}

console.log("=================================");

console.log("Перший");
setTimeout(() => { console.log("Другий"); }, 1000 * 2); // Затримка 2с
console.log("Третій");

// Вивід у консоль: Перший
//									Третій
//									Другий

console.log("=================================");

setTimeout(() => { console.log("Перший"); }, 0);
setTimeout(() => { console.log("Другий"); }, 0);
console.log("Третій");
console.log("Четвертий");
console.log("П'ятий");

// Вивід у консоль: Третій
//									Четвертий
//									П'ятий
//									Перший
//									Другий

console.log("=================================");

setTimeout(() => { console.log("Перший"); }, 0);
const immediateId = setImmediate(() => { console.log("Другий"); });  // Має більший пріорітет
console.log("Третій");
console.log("Четвертий");
console.log("П'ятий");

// Вивід у консоль: Третій
//									Четвертий
//									П'ятий
//									Другий
//									Перший

console.log("=================================");

const timeoutId = setTimeout(() => { console.log("Перший"); }, 5000);			// Виведе через 5с

const intervalId = setInterval(() => { console.log("Другий"); }, 5000);  	// Виведе кожні 5с
setTimeout(() => { clearInterval(intervalId); }, 20000);								 	// Зупинка setInterval

clearImmediate(immediateId);																							// Зупинка setImmediate

clearTimeout(timeoutId);																									// Зупинка setTimeout