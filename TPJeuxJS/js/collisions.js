function traiteCollisionsBalleAvecBords(b) {
  if (b.x + b.rayon > canvas.width) {
    //console.log("COLLISION A DROITE");
    // truc à savoir, pour ne pas que l'objet donne l'impression
    // d'aller plus loin que le bord de l'écran, on le remet au point de
    // contact
    b.x = canvas.width - b.rayon;
    b.vitesseX = -b.vitesseX;
  } else if (b.x - b.rayon < 0) {
    //console.log("COLLISION A GAUCHE");
    b.x = b.rayon; // point de contact
    b.vitesseX = -b.vitesseX;
  }

  if (b.y - b.rayon < 0) {
    b.y = b.rayon;
    b.vitesseY = -b.vitesseY;
  } else if (b.y + b.rayon > canvas.height) {
    b.y = canvas.height - b.rayon;
    b.vitesseY = -b.vitesseY;
  }
}

function traiteCollisionsJoueurAvecBords() {
  if (monstre.x > canvas.width - monstre.rayonM) {
    //console.log("COLLISION A DROITE");
    // truc à savoir, pour ne pas que l'objet donne l'impression
    // d'aller plus loin que le bord de l'écran, on le remet au point de
    // contact
    monstre.x = canvas.width - monstre.rayonM;
    monstre.vitesseX = -monstre.vitesseX;
  } else if (monstre.x < 0) {
    //console.log("COLLISION A GAUCHE");
    monstre.x = 0; // point de contact
    monstre.vitesseX = -monstre.vitesseX;
  }

  if (monstre.y < 0) {
    monstre.y = 0;
    monstre.vitesseY = -monstre.vitesseY;
  } else if (monstre.y + monstre.rayonM > canvas.height) {
    monstre.y = canvas.height - monstre.rayonM;
    monstre.vitesseY = -monstre.vitesseY;
  }
}

// Fonctions génériques de collision cercle-cercle, rectangle-rectangle et cercle-rectangle
// pour les curieux, polygone-polygone convexes existe aussi voir algorithme SAT
// (Separation Axis Theorem)
// Collisions between rectangle and circle
// Collisions between aligned rectangles
function circleCollide(x1, y1, r1, x2, y2, r2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return dx * dx + dy * dy < (r1 + r2) * (r1 + r2);
}

function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
 
  if ((x1 > (x2 + w2)) || ((x1 + w1) < x2))
     return false; // No horizontal axis projection overlap
  if ((y1 > (y2 + h2)) || ((y1 + h1) < y2))
     return false; // No vertical axis projection overlap
  return true; // If previous tests failed, then both axis projections
               // overlap and the rectangles intersect
}

function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
   var testX=cx;
   var testY=cy;
   if (testX < x0) testX=x0;
   if (testX > (x0+w0)) testX=(x0+w0);
   if (testY < y0) testY=y0;
   if (testY > (y0+h0)) testY=(y0+h0);
   return (((cx-testX)*(cx-testX)+(cy-testY)*(cy-testY))< r*r);
}