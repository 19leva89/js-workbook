const counterLabel = "Timer";
console.time(counterLabel);
console.count(counterLabel);

console.error("Error, a змінна повинна бути 5");
// console.exception();
console.info("Error, a змінна повинна бути 5");
console.warn("Error, a змінна повинна бути 5");
console.debug("Error, a змінна повинна бути 5");

console.timeLog(counterLabel);
console.count(counterLabel);

console.group("Grpup 1");
console.log("Test 1");
console.warn("Test 2");
console.groupCollapsed("Grpup 2");
console.debug("Test 3")
console.groupEnd();
console.groupEnd();

console.timeEnd(counterLabel);
console.countReset(counterLabel);

console.count(counterLabel);
