document.addEventListener('DOMContentLoaded', function () {
    const openModalBtns = document.querySelectorAll('#openModalBtn, #openModalBtn1, #openModalBtn2, #openModalBtn3, #openModalBtn4');
    const closeModalBtns = document.querySelectorAll('#closeModalBtn, #closeModalBtn1, #closeModalBtn2, #closeModalBtn3, #closeModalBtn4');
    const modals = document.querySelectorAll('#modal, #modal1, #modal2, #modal3, #modal4');

    if (openModalBtns.length > 0 && closeModalBtns.length > 0 && modals.length > 0) {
        openModalBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => openModal(modals[index]));
        });
        closeModalBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => closeModal(modals[index]));
        });
    } else {
        console.error('No se encontraron elementos con los ID especificados.');
    }

    function openModal(modal) {
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    window.addEventListener('click', function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    document.addEventListener('keyup', function(event){
        if(event.key === 'Escape' || event.key === 'Esc'){
            modals.forEach(modal =>{
                closeModal(modal)
            }
            )
        }
    })
});
