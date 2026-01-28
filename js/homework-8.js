import { productCards } from './product-cards.js';
import {
	getFromStorage,
	setToStorage,
	updateStorageDataByFilter,
	removeFromStorage,
	getStorageDataArrayLength,
} from './local-storage-api.js';

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

const LOCAL_STORAGE_CARDS_KEY = 'cards';

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

		// вешаем прослушиватель на кнопку удалить из каждой карточки
		const cardDeleteButton = getCardClones('btn-delete');
		cardDeleteButton.dataset.id = card.id;
		cardDeleteButton.addEventListener('click', handleDeleteCard.bind(null, LOCAL_STORAGE_CARDS_KEY));
		///////////////////////////////////////

		productCardWrapper.appendChild(cardClone);
	});
}

const handleDeleteCard = (storageDataKey, e) => {
	const btnId = e.target.dataset.id;
	const nearestProductCard = e.target.closest('.product-card');

	updateStorageDataByFilter(storageDataKey, btnId);

	nearestProductCard.remove();

	if (!getStorageDataArrayLength(storageDataKey)) {
		removeFromStorage(storageDataKey);
	};
}

const handleWindowLoad = (storageDataKey) => {
	if (!getStorageDataArrayLength(storageDataKey)) {
		setToStorage(storageDataKey, productCards);
	};
	const cards = getFromStorage(storageDataKey);

	const promtResult = prompt('Сколько карточек отобразить? От 1 до 5', 1);

	const cardsNumber = getCardsNumber(promtResult);

	const productCardsProfile = cards.slice(0, cardsNumber);
	renderCards(productCardsProfile);
}

console.log('log');

window.addEventListener('load', handleWindowLoad.bind(null, LOCAL_STORAGE_CARDS_KEY));
