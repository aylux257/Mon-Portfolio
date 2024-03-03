const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const socialImages = document.querySelectorAll('.Social-Network img');

window.addEventListener("mousemove", function(e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //cursorOutline.style.left = `${posX}px`;
  //cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});

  const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    
  if (hoveredElement.tagName.toLowerCase() === 'a'|| hoveredElement.tagName.toLowerCase() === 'p' || hoveredElement.tagName.toLowerCase() === 'b') {
    const hoveredElementColor = getComputedStyle(hoveredElement).color;
    cursorOutline.style.borderColor = hoveredElementColor;
  } else {
    const body = document.querySelector('body');
    if (body.style.backgroundColor == 'white'){
      cursorOutline.style.borderColor = 'rgba(87, 87, 87, 0.5)'; 
    }else{
      cursorOutline.style.borderColor = 'rgba(210, 210, 210, 0.5)'; 
    }
  }

  socialImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        if (image.alt === 'Discord' || image.alt === 'Instagram' || image.alt === 'Github') {
          cursorOutline.style.display = 'block';
          cursorDot.style.display = 'none';

          cursorOutline.style.width = '100px';
          cursorOutline.style.height = '100px';
          cursorOutline.style.backgroundColor = 'white';

          cursorOutline.style.textAlign = 'center';
          cursorOutline.style.lineHeight = '100px';
          
          setTimeout(() => {
          }, 1200);
          cursorOutline.innerText = image.alt;
          cursorOutline.style.color = 'black';
        }
    });

    image.addEventListener('mouseout', () => {
      cursorOutline.style.color = 'transparant';
      cursorDot.style.width = '5px';
      cursorDot.style.height = '5px';
      cursorDot.style.backgroundColor = 'black';
      cursorDot.style.display = 'block';
    
      cursorOutline.innerText = '';
      cursorOutline.style.textAlign = '';
      cursorOutline.style.lineHeight = '';
      cursorOutline.style.width = '30px';
      cursorOutline.style.height = '30px';
      cursorOutline.style.backgroundColor = '';
      cursorOutline.style.borderColor = '';    
    });
  });


})
