// 1 Переключение цвета
const productCardBtns = document.querySelectorAll('.product-card__btn');

productCardBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle('product-card_bg-blue');
	});
});

// 2 Покарска карточек
const blueColorHash = '#0000FF';
const greenColorHash = '#00FF00';

const allProductCards = document.querySelectorAll('.product-card');
const firstProductCard = document.querySelector('.product-card-first');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card');
const changeColorAlltCardBtn = document.querySelector('#change-color-all-cards');

changeColorFirstCardBtn.addEventListener('click', () => {
	firstProductCard.style.backgroundColor = blueColorHash;
});

changeColorAlltCardBtn.addEventListener('click', () => {
	allProductCards.forEach((card) => {
		card.style.backgroundColor = greenColorHash;
	});
});

// 3 Открыть google
const openGoogleBtn = document.querySelector('#open-google');

openGoogleBtn.addEventListener('click', () => {
	openGoogle();
});

function openGoogle() {
	const answer = confirm('Вы точно хотите перейти в Google?');

	if (answer == true) {
		window.open('https://google.com')
	} else {
		return;
	};
}

// Вывод консоль лог
const outputLogBtn = document.querySelector('#output-console-log');

outputLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
	alert(message);
	console.log(message);
}

// Заголовок, вывод в консоль
const title = document.querySelector('.title');

title.addEventListener('mouseover', () => {
	console.log('Выбери свой продукт');
});