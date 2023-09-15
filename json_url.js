const roleField = "roleName";

const data = {
	id: 1043,
	login: "user3431",
	password: "123451we@",
	[roleField]: "Admin",
	go() {
		console.log("go")
	},
	test1: {
		test2: 123
	}
};

const jsonData = JSON.stringify(data, (key, value) => {
	if (key === roleField) {
		return null;
	}
	if (typeof value === 'string') {
		return value.toUpperCase();
	}
	if (typeof value === 'number') {
		return value * 10;
	}
	return value;
},
	2
);
console.log(jsonData);



const parseData = JSON.parse(jsonData, (key, value) => {
	if (key === roleField) {
		return "Admin";
	}
	if (typeof value === 'string') {
		return value.toLowerCase();
	}
	if (typeof value === 'number') {
		return value / 10;
	}
	return value;
},
	1);
console.log(parseData);



const url = new URL('https://www.example.com/path');
console.log(url);
console.log(url.href);

const url2 = new URL('https://www.example.com/path').href;
console.log(url2);

const url3 = new URL('https://www.example.com/path/product-name/info#how-to-do').hash;
console.log(url3.slice(1));

const url4 = new URL('https://admin:4510-32131@www.example.com:8080/path/').password;
console.log(url4);

const url5 = new URL('https://admin:4510-32131@www.example.com:8080/path/').port;
console.log(url5);

const url6 = new URL('https://admin:4510-32131@www.example.com:8080/path/').username;
console.log(url6);

const url7 = new URL('https://www.google.com/search?q=hello&rlz=1C1GCEU_ruUA1041UA1041&oq=hello&aqs=chrome.0.0i355i512j46i512j0i512l4j46i512j0i512j46i199i465i512j0i512.1876j0j7&sourceid=chrome&ie=UTF-8').search;
console.log(url7);

const url8 = new URL('https://www.google.com/search?q=hello&rlz=1C1GCEU_ruUA1041UA1041&oq=hello&aqs=chrome.0.0i355i512j46i512j0i512l4j46i512j0i512j46i199i465i512j0i512.1876j0j7&sourceid=chrome&ie=UTF-8').searchParams;
console.log(url8);


console.log(url8.has("q"));

url8.append("name", "google");
console.log(url8);