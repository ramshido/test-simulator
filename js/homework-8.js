import { productCards } from './product-cards.js';

const productCardTemplate = document.getElementById('product-card-template');
const productCardWrapper = document.querySelector('.product-wrapper');

// 4. Изпользуя reduce() получить массив из объектов где ключ это название прдукта, значение же его описание

const productProfile = productCards.reduce((acc, item) => {
	acc.push({
		[item.title]: item.descr,
	});

	return acc;
}, []);

console.log(productProfile);
// 1, 2, 3, 5 задания
// Реализовать функцию, которая выводит (prompt) сообщение "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить количество.
// Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

function getCardsNumber(userNumber) {
	const cardsNumber = Number(userNumber);

	if (!isFinite(cardsNumber) || cardsNumber <= 0) {
		return 1;
	}
	return cardsNumber;
}

function renderCards(cardsArray, cardsNumber) {

	const productCardsProfile = cardsArray.slice(0, cardsNumber);

	productCardsProfile.forEach(card => {
		const cardClone = productCardTemplate.content.cloneNode(true);

		function getCardClone(element) {
			return cardClone.querySelector(`.product-card__${element}`);
		}

		getCardClone('img').setAttribute('src', `images/${card.img}.png`);
		getCardClone('img').setAttribute('alt', `${card.img}.png`);

		getCardClone('title').textContent = card.title;
		getCardClone('descr').textContent = card.descr;

		card.structure.forEach(item => {
			const li = document.createElement('li');
			li.classList.add('product-card__structure-item');
			li.textContent = item;
			getCardClone('structure').appendChild(li);
		});

		getCardClone('price-val').textContent =
			`${String(card.price)[0]} ${String(card.price).split('').slice(1).join('')} ${card.currency}`;

		productCardWrapper.appendChild(cardClone);
	});
}


const handleWindowLoad = () => {
	const promtResult = prompt('Сколько карточек отобразить? От 1 до 5', 1);

	const cardsNumber = getCardsNumber(promtResult);
	renderCards(productCards, cardsNumber);
}

window.addEventListener('load', handleWindowLoad);