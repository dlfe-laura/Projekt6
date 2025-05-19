//const hamburger = document.querySelector('.hamburger');
//const navLinks = document.querySelector('.nav-links');

//hamburger.addEventListener('click', () => {
  //navLinks.classList.toggle('active'); // Toggle the 'active' class on the nav-links
//});


// Check

  const hamburger = document.querySelector('.hamburger');
  const menuOverlay = document.getElementById('menuOverlay');

  hamburger.addEventListener('click', () => {
    menuOverlay.classList.toggle('show');
  });