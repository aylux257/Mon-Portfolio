const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]"); 

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
})
