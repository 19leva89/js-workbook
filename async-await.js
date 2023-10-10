function loadFile() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Дані файлу");
		}, 2000);
	});
}

function sendFileToData(fileData) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(true);
		}, 1500);
	});
}

function loadAndSendFile() {
	loadFile()
		.then((data) => sendFileToData(data))
		.finally(() => console.log("Файл відправлен"));
}

// аба

async function loadAndSendFile2() {
	const data = await loadFile();
	await sendFileToData(data)
	console.log("Файл відправлен")
}

loadAndSendFile();
loadAndSendFile2();