export class Modal {
	constructor(modalId, btnId) {
		this.modal = document.getElementById(modalId);
		this.overlay = document.getElementById('overlay');
		this.#initOpen(btnId);
	}

	open() {
		this.modal.classList.add('modal-showed');
		this.overlay.classList.add('overlay-showed');
	}

	close() {
		this.modal.classList.remove('modal-showed');
		this.overlay.classList.remove('overlay-showed');
	}

	#initOpen(button) {
		const btn = document.getElementById(button);
		btn.addEventListener('click', () => {
			this.open();
		});
	}

	#initClose() {
		const closeBtn = document.getElementById('modal-close-button');
		closeBtn.addEventListener('click', () => {
			this.close();
		});
	}
}