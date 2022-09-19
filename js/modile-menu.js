(() => {
  const refs = {
    openModalBtn: document.querySelector("[js-open-menu]"),
    closeModalBtn: document.querySelector("[js-close-menu]"),
    modal: document.querySelector("[js-menu-container]"),
  // const mobileMenu = document.querySelector('.js-menu-container');
  // const openMenuBtn = document.querySelector('.js-open-menu');
  // const closeMenuBtn = document.querySelector('.js-close-menu');
  
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop__is--hidden");
  }
})();