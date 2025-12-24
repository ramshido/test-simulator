// 1 
const productCard = document.querySelector('.product-card');
const productCardBtn = document.querySelector('.product-card__btn');

productCard.addEventListener( "DOMContentLoaded", () => {
	productCard.classList.toggle('.product-card_bg-blue');
})

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('this is addEventList');
// });


setTimeout(() => {
	console.log('Timer');
}, 2000)