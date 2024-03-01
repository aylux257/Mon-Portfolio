document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.cursor');

  // Fonction pour mettre à jour la position du curseur
  function updateCursorPosition(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursor.style.transform = `translate(${posX}px, ${posY}px)`;
  }

  // Mise à jour de la position initiale du curseur
  updateCursorPosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

  // Gestion de l'événement de déplacement de la souris
  document.addEventListener('mousemove', function(e) {
    updateCursorPosition(e);
    cursor.classList.add('active');
  });

  // Gestion de la fin de la transition
  cursor.addEventListener('transitionend', function() {
    cursor.classList.remove('active');
  });

  // Cursor Color for div='navbar-first'
  const links = document.querySelectorAll('.navbar-first ul li a');

  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      cursor.classList.add('active');
      cursor.style.borderColor = 'orange';
      cursor.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      cursor.style.borderColor = 'white';
      cursor.classList.remove('hovered');
    });
  });

  // Cursor Color for div='Accueil'
  const AccueilLinks = document.querySelectorAll('#Accueil .all-navbar .navbar ul li a');

  AccueilLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      cursor.classList.add('active');
      cursor.style.borderColor = 'orange';
      cursor.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      cursor.style.borderColor = 'black';
      cursor.classList.remove('hovered');
    });
  });
});
