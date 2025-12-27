// 1. Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль "Сейчас в X температура  — Y градусов по Цельсию"

function outputTemperatureOfCity(city, temp) {
	console.log(`Сейчас в ${city} температура  — ${temp} градусов по Цельсию`);
}
// outputTemperatureOfCity('Derbent', 8);

// 2. Создать переменную, которая хранит внутри себя скорость света (гуглим). Создать функцию, которая принимает 1 аргумент - скорость, 
// внутри функции происходит проверка: если переданная скорость выше скорости света — выводим лог "Сверхсветовая скорость", если ниже — "Субсветовая  скорость"? если равна — "Скорость света"

const LIGHT_SPEED = 299792458;

function compareSpeed(speed) {
	if (speed > LIGHT_SPEED) {
		console.log("Сверхсветовая скорость");
	} else if (speed < LIGHT_SPEED) {
		console.log("Субсветовая  скорость?");
	} else if (speed == LIGHT_SPEED) {
		console.log("Скорость света");
	};
}

// compareSpeed(450000000);

// 3. Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену (на ваше усмотрение).
// Далее создаем функцию, которая принимает 1 параметр - текущий бюджет, внутри функции происходит проверка: 
// если бюджет превышает цену товара - выводим лог "(ваше название товара) приобретён. Спасибо за покупку!", если нет - обсчитываем разницу и выводим лог "Вам не хватает X$, пополните баланс". 
// То-есть с помощью функции мы пытаемся приобрести товар.

const product = 'mouse';
const productPrice = 159;

function purchaseProduct(budget) {
	if (budget > productPrice) {
		console.log(`${product} приобретён. Спасибо за покупку!`);
	} else {
		const money = productPrice - budget;
		console.log(`Вам не хватает ${money}$, пополните баланс`);
	}
}

// purchaseProduct(33)

// 4. Создать 1 функцию и именовать её по своему усмотрению

function isLogIn(access = false) {
	if (access) {
		return true
	} else {
		return false
	}
}

// isLogIn();
// isLogIn(true);

// 5. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению

const products = [
	{ name: 'Mis', price: 3400 }, { name: 'Talen', price: 450 }, { name: 'Prod', price: 342 }
];
let userName = 'Burglar';
const RED_COLOR = '#FF0000';
