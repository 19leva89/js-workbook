try {
	const a = 10;
	a = 5;
	console.log("1");
} catch (error) {
	console.log(error);
} finally {
	console.log("2");
}



function getUserData(userId) {
	try {
		const a = 10;
		a = 5;

		// ... робить запит до бази даних
	} catch (err) {
		// err - помилка про те, що дані з сервера не можуть бути отримані
		throw new Error(`Помилка. Неможливо отримати дані користувача ${userId}`, { cause: err, });
	}
}
// getUserData(10123);


function updateUserData(userId) {
	try {
		const data = getUserData(userId);
		data.name = "Ivan";

		// ....
	} catch (err) {
		const newError = new Error(`Помилка. Неможливо оновити дані користувача ${userId}`, { cause: err, });
		console.log(newError.message);
	}
}
updateUserData(3123);


const ERROR_ID_LIST = {
	NOT_NUMBER: 1
}

function sumNum(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		const error = new TypeError(`Аргументи не є числами`);
		error.name = ERROR_ID_LIST.NOT_NUMBER;
		throw error;
	}
	return a + b;
}


try {
	sumNum(10, "abc");
} catch (err) {
	if (err.name === ERROR_ID_LIST.NOT_NUMBER) {
		console.log(sumNum(10, 0));
	}
}