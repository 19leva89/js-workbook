const article = {
	info: {
		title: "My article",
		description: "This is info about article",
	},
	id: 105423,
	categoryId: 1423,
	likeAmount: 442,
};

const ARTICLE_FIELD = {
	title: "ID статті",
	description: "Заголовок статті",
};

articlePhoto = {
	photoUrl: "...url",
	photoId: 100,
	photoType: "big"
};

articleCommentList = {
	list: [{ id: 4323, user: "Ivan", message: "Крутий контент" }],
};

Object.assign(article, articlePhoto, articleCommentList);
console.log(article);

console.log(Object.entries(article.info));


const formList = Object.entries(article.info);
const formListLayout = formList.map(([key, value]) => {
	// return `${ARTICLE_FIELD[key]} : ${value}`;
	return [ARTICLE_FIELD[key], value];
});
console.log(formListLayout);


const objArr = [['id', 100432], ['title', 'My product name'], ['price', 1203]];
console.log(Object.fromEntries(objArr));


console.log(article.hasOwnProperty("id"));


console.log(article.propertyIsEnumerable("id"));


Object.freeze(article);
article.title = "Hello"
console.log(article.hasOwnProperty("title"));

console.log(Object.isFrozen(article));


Object.preventExtensions(article);
article.title = "Hello";
console.log(article.title);


console.log(Object.isExtensible(article));


console.log(Object.seal(article));

console.log(Object.isSealed(article));


console.log(Object.keys(article));

console.log(Object.values(article));
console.log(Object.values(article.info));