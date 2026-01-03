import { productCards } from './product-cards.js';

const productCardTemplate = document.getElementById('product-card-template');
const productCardWrapper = document.querySelector('.product-wrapper');

productCards.forEach(card => {
	const cardClone = productCardTemplate.content.cloneNode(true);

	cardClone.querySelector('.product-card__img').setAttribute('src', `images/${card.img}.png`);
	cardClone.querySelector('.product-card__img').setAttribute('alt', `${card.img}.png`);

	cardClone.querySelector('.product-card__title').textContent = card.title;
	cardClone.querySelector('.product-card__descr').textContent = card.descr;

	card.structure.forEach(item => { 
		const li = document.createElement('li');
		li.classList.add('product-card__structure-item');
		li.textContent = item;
		cardClone.querySelector('.product-card__structure').appendChild(li); 
	});
	
	cardClone.querySelector('.product-card__price-val').textContent = `${String(card.price)[0]} ${String(card.price).split('').slice(1).join('')} ${card.currency}`;
	
	productCardWrapper.appendChild(cardClone);
});