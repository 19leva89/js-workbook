const date = new Date();
console.log(date);                 // 2023-09-16T09:46:00.746Z

const dateString = date.toISOString();
console.log(dateString);           // 2023-09-16T09:46:00.746Z

console.log(new Date(dateString)); // 2023-09-16T09:46:00.746Z

const date2 = Date.parse(dateString) + 1000 * 60 * 5;
console.log(date2);                // 1694857927952

console.log(date.toString());      // Sat Sep 16 2023 12:46:00 GMT+0300 (Восточная Европа, летнее время)
console.log(date.toUTCString());   // Sat, 16 Sep 2023 09:46:00 GMT
console.log(date.toISOString());   // 2023-09-16T09:46:00.746Z
console.log(date.toDateString());  // Sat Sep 16 2023
console.log(date.toTimeString());  // 12:46:00 GMT+0300 (Восточная Европа, летнее время)


const zone = date.getTimezoneOffset() / -60;
console.log(zone);                 // 3




const user = -3;

function getUserTimeZone(timezone) {
	let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
	date.setHours(date.getUTCHours() + timezone);
	return date;
}

const userDate = getUserTimeZone(user);
console.log(userDate.toTimeString());