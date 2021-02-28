window.onload = main;

let canvas;
let ctx;

// ici on va stocker les objets graphiques du jeu, ennemis, etc.
let tableauDesBalles = [];

// programme principal
function main() {
  console.log(
    "Page chargée ! DOM ready ! Toutes les resources de la page sont utilisables (videos, images, polices etc."
  );
  // On récupère grace à la "selector API" un pointeur sur le canvas
  canvas = document.querySelector("#myCanvas");

  // on ajoute des écouteurs souris/clavier sur le canvas
  canvas.onmousedown = traiteMouseDown;
  canvas.onmouseup = traiteMouseUp;
  canvas.onmousemove = traiteMouseMove;

  //canvas.addEventListener("mousedown", traiteMouseDown);
  //canvas.addEventListener("mousedown", traiteMouseDown2);

  // le canvas ne peut détecter les touches que si il a le focus (voir mooc)
  // c'est plus simple de mettre l'écouteur sur le document (la page)
  document.onkeydown = traiteKeyDown;
  document.onkeyup = traiteKeyUp;

  // pour dessiner, on a besoin de son "contexte graphique", un objet qui
  // va permettre de dessiner, ou de changer les propriétés du canvas
  // (largeur du trait, couleur, repère, etc.)

  ctx = canvas.getContext("2d");

  console.log(monstre.donneTonNom());

  creerDesBalles(10);

  requestAnimationFrame(animationLoop);
}

function creerDesBalles(nb) {
  let tabCouleurs = ["red", "green", "yellow", "orange", "purple"];

  for (let i = 0; i < nb; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let r = Math.random() * 30;
    let indexCouleur = Math.floor(Math.random() * tabCouleurs.length);
    let couleur = tabCouleurs[indexCouleur];
    let vx = -5 + Math.random() * 10;
    let vy = -5 + Math.random() * 10;

    let b = new Balle(x, y, r, couleur, vx, vy);

    // on ajoute la balle au tableau
    tableauDesBalles.push(b);
  }
}
let i = 10;
let etat = 0;
// animation à 60 images/s
function animationLoop() {
  // 1 on efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2 On dessine les objets

  monstre.draw(ctx);
  //console.log(monstre.donneTonNom());
  
  // 3 on déplace les objets
  monstre.move();

  updateBalles();
  //deplacerLesBalles();

  if (updateBalles() == 1){
    let etat = 0;
  }

  if (etat == 0){
    i = i - 1;
  }

  if (i%2 == 0){
    monstre.animeBouche()
  }
  else{
    monstre.boucheNormale()
  }
  if (i = 0){
    etat = 1;
    i = 10;
  }

  // 4 on peut faire autre chose (par ex: detecter des collisions,
  // ou prendre en compte le clavier, la souris, la manette de jeu)
  traiteCollisionsJoueurAvecBords();

  // 5 On demande au navigateur de rappeler la fonction
  // animationLoop dans 1/60ème de seconde
  requestAnimationFrame(animationLoop);
}

function traiteCollisionBalleAvecMonstre(b) {
  if (
    circRectsOverlap(
      monstre.x,
      monstre.y,
      monstre.l,
      monstre.h,
      b.x,
      b.y,
      b.rayon
    )
  ) {

    console.log("COLLISION....");
    // on cherche l'index de la balle dans le tableau des balles
    let index = tableauDesBalles.indexOf(b);

    // pour supprimer un élément : on utilise la méthode splice(index, nbElementsASupprimer) sur le tableau
    tableauDesBalles.splice(index, 1);
    //b.couleur = "pink";
  }
  return 1;
}

function updateBalles() {
  // utilisation d'un itérateur sur le tableau
  tableauDesBalles.forEach((b) => {
    b.draw(ctx);
    traiteCollisionsBalleAvecBords(b);
    traiteCollisionBalleAvecMonstre(b);
    b.move();
  });
  if (a = 1){
    return 1;
  }
  else{
    return 0;
  }
}
