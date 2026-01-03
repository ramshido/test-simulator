import { productCards } from './product-cards.js';

const productCardTemplate = document.getElementById('product-card-template');
const templateTestWrapper = document.querySelector('.template-test-wrapper');

productCards.forEach(card => {
	const cardClone = productCardTemplate.content.cloneNode(true);
	cardClone.querySelector();
	
})