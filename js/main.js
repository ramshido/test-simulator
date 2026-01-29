import { Modal } from "./Modal.js";

const modalCloseButton = document.getElementById('modal-close-button');
const modalRegistration = new Modal('registration-modal', 'registration-button', false);
const modalAuth = new Modal('auth-modal', 'auth-button', true);


// const buttonAuth = document.getElementById('auth-button');
