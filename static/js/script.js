document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.cursor');
  const links = document.querySelectorAll('.navbar-first ul li a');

  document.addEventListener('mousemove', function(e) {
      const posX = e.clientX //- cursor.offsetWidth / 2; // Ajuste la position horizontale en fonction de la moitié de la largeur du curseur
      const posY = e.clientY //- cursor.offsetHeight / 2; // Ajuste la position verticale en fonction de la moitié de la hauteur du curseur

      cursor.style.transform = `translate(${posX}px, ${posY}px)`;
      cursor.classList.add('active'); // Ajoute la classe active pour déclencher la transition
  });

  cursor.addEventListener('transitionend', function() {
      cursor.classList.remove('active'); // Supprime la classe active lorsque la transition est terminée
  });

  links.forEach(link => {
      link.addEventListener('mouseover', () => {
          cursor.classList.add('active'); // Ajoute la classe active pour agrandir le curseur
          cursor.style.borderColor = 'orange'; // Change la couleur de la bordure du curseur
          cursor.classList.add('hovered'); // Ajoute la classe hovered pour agrandir le curseur
      });
      link.addEventListener('mouseleave', () => {
          cursor.classList.remove('active'); // Retourne à la taille normale du curseur
          cursor.style.borderColor = 'white'; // Rétablit la couleur de la bordure du curseur à blanc
          cursor.classList.remove('hovered'); // Retire la classe hovered pour restaurer la taille normale du curseur
      });
  });
});
