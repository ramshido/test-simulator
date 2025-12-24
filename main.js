// 1 Переключение цвета
const productCardBtns = document.querySelectorAll('.product-card__btn');

productCardBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle('product-card_bg-blue');
	});
})


// 2 Покарска карточки
const blueColorHash = '#0000FF';
const greenColorHash = '#00FF00';

const allProductCards = document.querySelectorAll('.product-card');
const firstProductCard = document.querySelector('.product-card-first');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card'); 
const changeColorAlltCardBtn = document.querySelector('#change-color-all-cards'); 

changeColorFirstCardBtn.addEventListener('click', () => {
	firstProductCard.style.backgroundColor = blueColorHash;
})

changeColorAlltCardBtn.addEventListener('click', () => {
	allProductCards.forEach((card) => {
		card.style.backgroundColor = greenColorHash;
	})
})

// 3 Открыть google
const openGoogleBtn = document.querySelector('#open-google');

openGoogleBtn.addEventListener('click', () => {
	window.open('https://google.com')
})