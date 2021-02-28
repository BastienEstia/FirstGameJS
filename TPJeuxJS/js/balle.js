// Exemple de classe
class Balle {
  x;
  y;
  couleur = "black";
  vitesseX = 0;
  vitesseY = 0;

  constructor(x, y, rayon, couleur, vitesseX, vitesseY) {
    this.x = x;
    this.y = y;
    this.rayon = rayon;
    if (couleur) this.couleur = couleur;
    if (vitesseX) this.vitesseX = vitesseX;
    if (vitesseY) this.vitesseY = vitesseY;
  }

  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);

    // dessin d'un cercle, on utilise le mode "chemin"
    ctx.beginPath();

    // cx, cy, rayon, angle départ, angle arrivée en radians
    ctx.arc(0, 0, this.rayon, 0, 2 * Math.PI);

    // on donne l'ordre d'afficher le chemin
    ctx.fillStyle = this.couleur;
    ctx.fill(); // en formes pleines

    ctx.lineWidth = 10;
    ctx.strokeStyle = "yellow";
    ctx.stroke(); // en fil de fer

    ctx.restore();
  }

  move() {
    this.x += this.vitesseX;
    this.y += this.vitesseY;
  }
}
