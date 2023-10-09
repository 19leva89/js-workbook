function loadFile(filename, callback) {
	try {
		console.log(`Завантаження файлу ${filename}...`);
		setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);
	} catch (e) {
		callback(e);
	}
}


loadFile("example.txt", (error, content) => {
	if (error) {
		console.error("Помилка завантаження файлу:", error);
	} else {
		console.log("Файл завантажено успішно!");
		console.log("Вміст файлу:", content);
	}
});

// ==================================================

// Конвертація файлу
function convertFile(content, callback) {
	setTimeout(() => callback(null, `Конвертований вміст: ${content.toUpperCase}`), 1000);
};

// Збереження файлу
function saveFile(convertedContent, callback) {
	setTimeout(() => callback(), 1500);
};

// Відправка даних в інтерфейс
function sendFileToClient(callback) {
	setTimeout(() => callback(), 500);
};


// Варіант написання через "Колбеки"
loadFile("example.txt", (error, content) => {
	if (error) {
		console.error("Помилка завантаження файлу:", error);
	} else {
		console.log("Файл завантажено успішно!");
		console.log("Вміст файлу:", content);

		convertFile(content, (error, convertedContent) => {
			if (error) {
				console.error("Помилка конвертації файлу:", error);
			} else {
				console.log("Файл успішно сконвертовано!");
				console.log("Конвертований вміст:", convertedContent);

				saveFile(convertedContent, (error) => {
					if (error) {
						console.error("Помилка збереження файлу:", error);
					} else {
						console.log("Файл успішно збережено!");

						sendFileToClient((error) => {
							if (error) {
								console.error("Помилка відправлення файлу клієнту:", error);
							} else {
								console.log("Файл успішно відправлено клієнту!");
							}
						});
					}
				});
			}
		});
	}
});


// Варіант написання через "Проміси"
const loadFile = (filename) => new Promise((resolve, reject) => {
	console.log(`Завантаження файлу ${filename}...`);

	// reject("Error");

	setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
});

loadFile("image.png")
	.then((data) => {
		return data.toUpperCase();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log("Error", error);
	})
	.finally(() => {
		console.log("End");
	});


// ==================================================

const result = loadFile("Photo.jpg");

result.then((data) => {
	console.log(data, 1);
	return null;
});

result.then((data) => {
	console.log(data, 2);
	return null;
});

result.then((data) => {
	console.log(data, 3);
	return null;
});

// ==================================================

function loadFile2(filename) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Вміст файлу ${filename}`);
		}, 2000);
	});
}

// Конвертація файлу
function convertFile(content) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Конвертований вміст: ${content.toUpperCase()}`);
		}, 1000);
	});
}

// Збереження файлу
function saveFile(convertedContent) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1500);
	});
}

// Відправка даних в інтерфейс
function sendFileToClient() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 500);
	});
}

function getInfoFromFile(file) {
	console.log(file, 1111);

	return Promise.resolve(file);
}

Promise.all([
	loadFile2("example.txt"),
	getInfoFromFile("example.txt"),
	saveFile(),
	sendFileToClient(),
	convertFile("file")
])
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		console.log(error)
	})

loadFile2("example.txt")
	.then((content) => {
		console.log("Файл завантажено успішно!");
		console.log("Вміст файлу:", content);
		return convertFile(content);
	})
	.then((data) => {
		return getInfoFromFile(data);
	})
	.then((convertedContent) => {
		console.log("Файл успішно сконвертовано!");
		console.log("Конвертований вміст:", convertedContent);
		return saveFile(convertedContent);
	})
	.then(() => {
		console.log("Файл успішно збережено!");
		return sendFileToClient();
	})
	.catch((error) => {
		console.error("Сталася помилка:", error);
	})
	.finally(() => {
		console.log("Файл успішно відправлено клієнту!");
	});