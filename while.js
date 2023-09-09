let count = 0;
let isFast = true;

while (count < 5) {
	console.log("Hello", count);

	if (isFast && count >= 3) {
		count = 5;
	} else {
		count++;
	}
}