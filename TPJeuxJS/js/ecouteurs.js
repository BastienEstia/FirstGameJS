let mousePos = {};

function traiteMouseDown(event) {
  //console.log("Souris clickée dans le canvas bouton " + event.button);
  //console.log("Clickée en x = " + mousePos.x + " y = " + mousePos.y);
}

function traiteMouseUp(event) {
    //console.log("Souris relâchée dans le canvas bouton " + event.button);

}

function traiteMouseMove(event) {
  //console.log("Souris déplacée dans le canvas");
  // pour prendre en compte les marges, le css, etc.
  var arc = canvas.getBoundingClientRect();

  mousePos.x = event.clientX - arc.left;
    mousePos.y = event.clientY - arc.top;
    
    
          //console.log("Souris en x = " + mousePos.x + " y = " + mousePos.y);
    
    monstre.setTarget(mousePos.x, mousePos.y);
}

function traiteKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      monstre.vitesseX = -5;
      break;
    case "ArrowRight":
      monstre.vitesseX = 5;
      break;
    case "ArrowUp":
      monstre.vitesseY = -5;
      break;
    case "ArrowDown":
      monstre.vitesseY = 5;
      break;
  }
}

function traiteKeyUp(event) {
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowRight":
      monstre.vitesseX = 0;
      break;
    case "ArrowUp":
    case "ArrowDown":
      monstre.vitesseY = 0;
      break;
  }
}
