// Уровень 1:

// 1. Создаем файл, все как прошлых дз.

// 4. К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.
// Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }

const subscribingForm = document.querySelector('#subscribing-form');
const formInput = document.querySelector('#form-input');

function getFormData(form) {
	const
		formElement = form,
		formData = new FormData(formElement),
		formObject = Object.fromEntries(formData.entries());

	return formObject;
}

function getEmailRegExpMatchArray(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

const handleEmailInputValidation = () => {
	const isValid = getEmailRegExpMatchArray(formInput.value);

	formInput.setCustomValidity(isValid ? '' : 'Поле неправильно заполнена');

	if (!isValid) {
		formInput.reportValidity();
	};
}

formInput.addEventListener('input', handleEmailInputValidation);
subscribingForm.addEventListener('submit', e => {
	e.preventDefault();

	if (!form.checkValidity()) {
		alert(`Ошибка, Фомра неправильно заполнена`);
		return;
	}

	const formObject = getFormData(e.target);

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

const handleModalWindowShowing = () => {
	modalWindow.classList.add('modal-window_showed');
};

const handleModalWindowClosing = () => {
	modalWindow.classList.remove('modal-window_showed');
	formRegistration.reset();
};

function handlePasswordsValidation() {
	const isValid = String(firstPasswordInput.value).trim().toLowerCase() ===
		String(repeatPasswordInput.value).trim().toLowerCase();

	repeatPasswordInput.setCustomValidity(isValid ? '' : 'Пароли не совпадают');

	if (!isValid) {
		repeatPasswordInput.reportValidity();
	}
}

const handleFormSubmission = e => {
	e.preventDefault();

	if (!e.target.checkValidity()) {
		return;
	};

	const formObject = getFormData(e.target);
	const user = {
		...formObject,
		createdOn: new Date(),
	};
	console.log(user);
};

userRegistrateBtn.addEventListener('click', handleModalWindowShowing);
overlay.addEventListener('click', handleModalWindowClosing);
modalCloseBtn.addEventListener('click', handleModalWindowClosing);

repeatPasswordInput.addEventListener('input', handlePasswordsValidation);
formRegistration.addEventListener('submit', handleFormSubmission);