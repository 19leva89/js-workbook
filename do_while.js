let start = 0;
let goal = 100;

let step = 0;
let set = 8;
let rest = 10;

do {
	if (step === 0) {
		console.log("Початок тренування");
	}

	start++;
	step++;

	if (step === goal || start === goal) {
		console.log("Кінець тренування");
		break;
	}

	if (step % rest === 0) {
		console.log(`Зробіть перерву`);
		continue;
	}

	if (step % set === 0) {
		console.log(`Ви зробили ${step / set} сет(ів)`);
	}

	if (step === goal / 2) {
		console.log("Половина тренування");
	}

	console.log("Поточний прогрес", step);
} while (step < goal && start < goal);
