export class Modal {
	constructor(modalId, btnId, shouldCloseOnOverlay) {
		this.modal = document.getElementById(modalId);
		this.overlay = document.getElementById('overlay');
		this.closeBtn = document.getElementById('modal-close-button');
		this.shouldCloseOnOverlay = shouldCloseOnOverlay;
		this.handleClose = this.close.bind(this);
		this.#initOpen(btnId);
	}

	open() {
		this.#initClose();
		this.modal.classList.add('modal-showed');
		this.overlay.classList.add('overlay-showed');
	}

	close() {
		this.#removeCloseEventListeners();
		this.modal.classList.remove('modal-showed');
		this.overlay.classList.remove('overlay-showed');
	}

	isOpen() {
		return this.modal.classList.contains('modal-showed');
	}

	#initOpen(button) {
		const btn = document.getElementById(button);
		btn.addEventListener('click', () => {
			this.open();
		});
	}

	#initClose() {
		this.closeBtn.addEventListener('click', this.handleClose);
		if (this.shouldCloseOnOverlay) {
			this.overlay.addEventListener('click', this.handleClose);
		}
	}

	#removeCloseEventListeners() {
		this.closeBtn.removeEventListener('click', this.handleClose);
		this.overlay.removeEventListener('click', this.handleClose);
	}
}