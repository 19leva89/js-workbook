for (let i = 0, j = 5; i <= j; i++) {
	console.log("Test", i, j);

	if (i === 3) {
		j++;
	}

	for (let q = 0; q < i; q++) {
		console.log("Q", q);
	}
}