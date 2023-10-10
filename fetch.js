const dataTest = {
	id: 1,
	name: "User",
	age: 50
};

const request = new Request("https://jsonplaceholder.typicode.com/todos/1", {
	method: "DELETE",
});
fetch(request)
console.log(request.method)

// або

fetch("https://jsonplaceholder.typicode.com/todos/1", {
	method: "POST",
	body: JSON.stringify(dataTest),
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer your_token",
	},
}).then((res) => {
	console.log(res);
});

// або

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
		method: "GET",
		// body: JSON.stringify(dataTest),
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer your_token",
		},
	});

	console.log(res.bodyUsed);						// false

	console.log(res);

	const data = await res.json();
	// const data = await res.text();
	console.log(data);

	console.log(res.bodyUsed);						// true

	console.log(res.ok);									// true

	console.log(res.status);
}
getData()