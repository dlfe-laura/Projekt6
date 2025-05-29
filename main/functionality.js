  const hamburger = document.querySelector('.hamburger');
  const menuOverlay = document.getElementById('menuOverlay');

  hamburger.addEventListener('click', () => {
    menuOverlay.classList.toggle('show');
  });