class BalleAvecVitesseXY extends Balle {
  vitesseX;
  vitesseY;

  constructor(x, y, rayon, couleur, vitesseX, vitesseY) {
    super(x, y, rayon, couleur);

    this.vitesseX = vitesseX;
    this.vitesseY = vitesseY;
  }

  // draw est héritée....

  move() {
    this.x += this.vitesseX;
    this.y += this.vitesseY;
  }
}
