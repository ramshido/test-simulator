// Уровень 1:

// 1. Создаем файл, все как прошлых дз.

// 4. К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.
// Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }

const form = document.querySelector('#subscribing-form');
const formSubmitBtn = document.querySelector('#form-submit-btn');
const formInput = document.querySelector('#form-input');

function getEmailRegExpMatchArray(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

form.addEventListener('submit', e => {
	e.preventDefault();

	if (!formInput.value.length) {
		alert('Поле на заполнено');
		form.reset();
		return;
	};

	const isInputValid = getRegExpMatchArray(formInput.value.trim().toLowerCase());

	if (!isInputValid) {
		alert('Email не корректен, попробуйте снова');
		form.reset();
		return;
	};

	const formElement = e.target;
	const formData = new FormData(formElement);
	const formObject = Object.fromEntries(formData.entries());

	console.log(formObject);
});

// Уровень 2:

const
	userRegistrateBtn = document.getElementById('user-registrate-btn'),
	modalWindow = document.getElementById('modal-window'),
	overlay = document.querySelector('.modal-window__overlay'),
	modalCloseBtn = document.getElementById('modal-close-btn'),
	formRegistration = document.getElementById('form-registration'),
	firstPasswordInput = document.getElementById('form-registration-first-password'),
	repeatPasswordInput = document.getElementById('form-registration-repeat-password');

formRegistration.reset();

const showModalWindow = () => {
	modalWindow.classList.add('modal-window_showed');
};

const closeModalWindow = () => {
	modalWindow.classList.remove('modal-window_showed');
	formRegistration.reset();
};

function validatePasswords() {
	const isValid = String(firstPasswordInput.value).trim().toLowerCase() ===
		String(repeatPasswordInput.value).trim().toLowerCase();

	repeatPasswordInput.setCustomValidity(isValid ? '' : 'Пароли не совпадают');

	if (!isValid) {
		repeatPasswordInput.reportValidity();
	}
}

const submitForm = e => {
	e.preventDefault();

	if (!e.target.checkValidity()) return;

	const
		formElement = e.target,
		formData = new FormData(formElement),
		user = {
			...Object.fromEntries(formData.entries()),
			createdOn: new Date(),
		};
	console.log(user);

};

userRegistrateBtn.addEventListener('click', showModalWindow);
overlay.addEventListener('click', closeModalWindow);
modalCloseBtn.addEventListener('click', closeModalWindow);

repeatPasswordInput.addEventListener('input', validatePasswords);
formRegistration.addEventListener('submit', submitForm);