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

function renderCards(cardsArray) {
	cardsArray.forEach(card => {
		const cardClone = productCardTemplate.content.cloneNode(true);

		function getCardClones(element) {
			return cardClone.querySelector(`.product-card__${element}`);
		}

		getCardClones('img').setAttribute('src', `images/${card.img}.png`);
		getCardClones('img').setAttribute('alt', `${card.img}.png`);

		getCardClones('title').textContent = card.title;
		getCardClones('descr').textContent = card.descr;

		card.structure.forEach(item => {
			const li = document.createElement('li');
			li.classList.add('product-card__structure-item');
			li.textContent = item;
			getCardClones('structure').appendChild(li);
		});

		const firstCharacterOfPrice = String(card.price)[0];
		const priceWithoutFirstCharacter = String(card.price).split('').slice(1).join('');
		getCardClones('price-val').textContent =
			`${firstCharacterOfPrice} ${priceWithoutFirstCharacter} ${card.currency}`;

		productCardWrapper.appendChild(cardClone);
	});
}


const handleWindowLoad = () => {
	const promtResult = prompt('Сколько карточек отобразить? От 1 до 5', 1);

	const cardsNumber = getCardsNumber(promtResult);

	const productCardsProfile = productCards.slice(0, cardsNumber);
	renderCards(productCardsProfile);
}

window.addEventListener('load', handleWindowLoad);