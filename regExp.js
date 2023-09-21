// new RegExp(pattern, flags);
// RegExp(pattern, flags);

const regexp = /(?<group1>.e)(?<group2>st)/gmsi;
const regexp1 = RegExp("test", "gmsi")
console.log(regexp);
console.log(regexp1);

console.log(regexp.flags);

console.log(regexp.global);      // global       // g
console.log(regexp.multiline);   // multi line   // m
console.log(regexp.dotAll);      // single line  // s
console.log(regexp.ignoreCase);  // insensitive  // i

regexp.lastIndex = 9

const result = regexp.exec('This is test and est');
console.log(result);


console.log(regexp.exec('This is test and est'));
console.log(regexp.exec('This is test and est'));

console.log(regexp.test('This is test and est'));

console.log(regexp.source);


const test = 'This is test and est';
console.log(test.replace(regexp, "###"));


console.log(test.search(regexp));


console.log(test.match(regexp));
console.log(test.matchAll(regexp));


const result2 = test.matchAll(regexp);
console.log(result2.next());
