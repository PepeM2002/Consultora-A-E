document.addEventListener('DOMContentLoaded', function () {
	const openModalBtn = document.getElementById('openModalBtn')
	const closeModalBtn = document.getElementById('closeModalBtn')
	const modal = document.getElementById('modal')

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

document.addEventListener('DOMContentLoaded', function () {
	const openModalBtn = document.getElementById('openModalBtn1')
	const closeModalBtn = document.getElementById('closeModalBtn1')
	const modal = document.getElementById('modal1')

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

document.addEventListener('DOMContentLoaded', function () {
	const openModalBtn = document.getElementById('openModalBtn2')
	const closeModalBtn = document.getElementById('closeModalBtn2')
	const modal = document.getElementById('modal2')

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


document.addEventListener('DOMContentLoaded', function () {
	const openModalBtn = document.getElementById('openModalBtn3')
	const closeModalBtn = document.getElementById('closeModalBtn3')
	const modal = document.getElementById('modal3')

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