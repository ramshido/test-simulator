// 1. Создайте объект и описать в нем себя, до 10 пунктов и правильно назвать.

const user = {
	name: 'Nizam',
	age: 23,
	height: '183см',
	city: 'Magas',
	status: 'не женат',
	job: 'Программист',
};

// 2. Создайте объект о машине и добавить туда объект - владельец, отдельной строкой.

const car = {
	name: 'BMW',
	model: 'M5',
	year: 2024,
	color: 'dark-blue',
	transmissionBox: 'automatic',
	power: '727 л.с.',
	engineCapacity: '4.4 л.',
};

car.owner = user;

// 3. Написать функцию которая проверяет, есть ли у объекта car максимальная скорость, если нет, добавляет

function checkObjectHasMaxSpeedKey(obj) {
	if (obj.maxSpeed) {
		obj.maxSpeed = 305;
	};
};

checkObjectHasMaxSpeedKey(car);

// 4. Написать функцию которая принимает объект и выводит значения свойства объекта

function outputObjKeyVal(obj, key) {
	if (obj[key]) {
		console.log(obj[key]);
	};
};

outputObjKeyVal(car, 'model');

// 5. Создать массив, который содержит названия продуктов (просто строки)

const productsName = [
	'Apple',
	'Carrot',
	'Orange',
	'Onion',
	'Watermelon',
	'Pumkin',
	'Potato',
	'Tomato',
	'Cucumber'
];

// 6. Создать массив объектов, где объект это книга, после, используя известный метод, 
// добавить еще одну книгу в конец

const Books = [
	{
		name: 'The Adventure of Don Quixote',
		author: 'Miguel de Cervantes',
		PublicationDate: 1605,
		genre: 'Novel',
	},
	{
		name: 'Romeo and Juliet',
		author: 'William Shakespeare',
		PublicationDate: 1597,
		genre: 'Shakespearean tragedy',
	},
	{
		name: 'Harry Potter',
		author: 'J. K. Rowling',
		PublicationDate: 1997,
		genre: 'Fantasy',
	},
	{
		name: 'The Lord of the Rings',
		author: 'J. R. R. Tolkien',
		PublicationDate: 1954,
		genre: 'High fantasy Adventure',
	}
];

const bookOfGetReadyForFirstPlayer = {
	name: 'Первому игроку приготовиться',
	author: 'Эрнест Клайн',
	PublicationDate: 2011,
	genre: 'Fantasy',
};

Books.push(bookOfGetReadyForFirstPlayer);

// 7. Создать массив книг об определенной вселенной затем объединить этот массив и тот выше в один

const marvelBooks = [
	{
		name: 'Герои и злодеи MARVEL. Записки Ника Фьюри',
		author: 'Нэд Хартли',
		PublicationDate: 2020,
		genre: 'Кинематограф, Энциклопедии',
	},
	{
		name: 'Marvel. Girl Power. 65 супергероинь вселенной Марвел, которые изменили мир 18+',
		author: 'Синк Лорейн, Чжан Элис И.',
		PublicationDate: 2020,
		genre: 'Кинематограф, Энциклопедии',
	},
	{
		name: 'Человек-Паук. Энциклопедия персонажей',
		author: 'Нэд Хартли',
		PublicationDate: 2020,
		genre: 'Кинематограф, Энциклопедии',
	},
];

const combinedBooks = Books.concat(marvelBooks);

// 8. Написать функцию, которая принимает массив из предыдущего задания и проверяет на следующее: 
// Если книга выпущена до 1556 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).

function setRareKeyForBook(Books) {
	const BooksWithRarityVal = Books.map((book) => {
		if (book.PublicationDate <= 1990) {
			book.isRare = true;
		} else {
			book.isRare = false
		};
	});
	Books = { ...BooksWithRarityVal };
};

setRareKeyForBook(combinedBooks);