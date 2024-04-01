document.addEventListener('DOMContentLoaded', function () {
	const openModalBtn = document.getElementById ('openModalBtn','openModalBtn1')
	const closeModalBtn = document.getElementById('closeModalBtn','closeModalBtn1')
	const modal = document.getElementById('modal','modal1')

	if (openModalBtn && closeModalBtn && modal) {
		openModalBtn.addEventListener('click', openModal)
		closeModalBtn.addEventListener('click', closeModal)
	} else {
		console.error('No se encontraron elementos con los ID especificados.')
	}

	function openModal() {
		if (modal) {
			modal.classList.remove('hidden')
		}
	}

	function closeModal() {
		if (modal) {
			modal.classList.add('hidden')
		}
	}
	window.addEventListener('click', function (event) {
		if (event.target === modal) {
			closeModal()
		}
	})
})
