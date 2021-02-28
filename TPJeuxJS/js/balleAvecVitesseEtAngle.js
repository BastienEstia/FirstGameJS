class BalleAvecVitesseEtAngle extends Balle {
  vitesse = 3;
  angle = 0;

  constructor(x, y, rayon, couleur, vitesse, angle) {
    // constructeur de la classe mère
    super(x, y, rayon, couleur);

    this.vitesse = vitesse;
    this.angle = angle;
  }
  draw(ctx) {
    // dessine la balle mais avec un vecteur direction/vitesse
    super.draw(ctx);

    ctx.save();
    // on dessine un trait dans la direction de la balle
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100 + this.vitesse * 5, 0);

    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }

  move() {
    this.x += this.vitesse * Math.cos(this.angle);
    this.y += this.vitesse * Math.sin(this.angle);
  }
}
