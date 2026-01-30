import {
	getFromStorage,
	setToStorage,
	removeFromStorage
} from "../local-storage-api.js";

const allCardsDeleteButton = document.querySelector('#btn-clear-all');
const allCardsAddButton = document.querySelector('#btn-load-all');
const usersList = document.querySelector('.user-cards-list');
const downloadingText = document.querySelector('.status-text');

const USERS_STORAGE_KEY = 'users';

async function fetchUsers() {
	try {
		const response = await fetch('users.json');
		const users = await response.json();
		setToStorage(USERS_STORAGE_KEY, users);
		return users;
	} catch (error) {
		downloadingText.textContent = 'Ошибка при загрузке данных';
		throw new Error('Ошибка загрузки');
	}
}

function renderCardsUsers(users) {
	usersList.innerHTML = '';
	users.forEach(user => {
		const template = document.querySelector('#template-user-card').content.cloneNode(true);

		const li = template.querySelector('.user-card-item');
		li.dataset.id = user.id;

		const cardDeleteBtn = template.querySelector('.btn-delete-card')
		cardDeleteBtn.addEventListener('click', () => {
			deleteUser(user.id);
		})

		template.querySelector('.user-id').textContent = `ID: ${user.id}`;
		template.querySelector('.user-firstname').textContent = `Имя: ${user.name}`;
		template.querySelector('.user-lastname').textContent = `Фамилия: ${user.surname}`;
		template.querySelector('.user-email').textContent = `Email: ${user.email}`;
		template.querySelector('.user-age').textContent = `Возраст: ${user.age}`;
		template.querySelector('.user-city').textContent = `Город: ${user.city}`;
		template.querySelector('.user-job').textContent = `Должность: ${user.job}`;

		usersList.appendChild(template);
	});
}

async function initUsers() {
	let users = getFromStorage(USERS_STORAGE_KEY);

	if (users && users.length) {
		downloadingText.style.display = 'none';
		renderCardsUsers(users);
	} else {
		downloadingText.style.display = 'block';
		setTimeout(async () => {
			users = await fetchUsers();
			downloadingText.style.display = 'none';
			renderCardsUsers(users);
		}, 1000);
	}
}

allCardsDeleteButton.addEventListener('click', () => {
	localStorage.removeItem(USERS_STORAGE_KEY);
	usersList.innerHTML = '';
});

allCardsAddButton.addEventListener('click', async () => {
	let users = getFromStorage(USERS_STORAGE_KEY);
	if (!users) {
		users = await fetchUsers();
	}
	renderCardsUsers(users);
});

function deleteUser(id) {
	const cardElement = document.querySelector(`.user-card-item[data-id="${id}"]`);
	if (cardElement) cardElement.remove();

	let users = getFromStorage(USERS_STORAGE_KEY);
	users = users.filter(user => user.id != Number(id));
	setToStorage(USERS_STORAGE_KEY, users);
}

const handleWindowLoad = () => {
	initUsers();
}

window.addEventListener('load', handleWindowLoad);