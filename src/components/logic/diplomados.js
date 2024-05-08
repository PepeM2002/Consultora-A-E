document.addEventListener('DOMContentLoaded', function () {
   const openModalBtns = document.querySelectorAll("#openModalBtn,#openModalBtn1,#openModalBtn2,#openModalBtn3 ")
   const closeModalBtns = document.querySelectorAll("#closeModalBtn,#closeModalBtn1,#closeModalBtn2,#closeModalBtn3")
   const modal = document.querySelectorAll("#modal,#modal1,#modal2,#modal3")

   if (openModalBtns.length > 0 && closeModalBtns.length > 0 && modal.length > 0) {
      openModalBtns.forEach((btn, index) => {
         btn.addEventListener('click', () => openModal(modal[index]));
      })
      closeModalBtns.forEach((btn, index) => {
         btn.addEventListener('click', () => closeModal(modal[index]))
      })
   } else {
      console.error("No se encontro ningun documento modal")
   }
   function openModal(modal) {
      if (modal) {
         modal.classList.remove('hidden')
      }
   }
      function closeModal(modal){
         if(modal){
            modal.classList.add('hidden')
         }
      }
      window.addEventListener('click', function(event){
         modal.forEach(modal =>{
            if(event.target === modal){
               closeModal(modal)
            }
         })
      })
  

})