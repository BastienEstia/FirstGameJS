// exemple d'objet litteral
let monstre = {
  x: 200,
  y: 200,
  target: {},
  rayonM: 50,
  scale: 1,
  incScale: 0,
  xOeil: 450,
  yOeil: 60,
  angle: 0,
  incAngle: 0,
  vitesseX: 0,
  vitesseY: 0,
  couleur: "red",
  endLeftX: 0,
  endLeftY: 0,
  endRightX: 0,
  endRightY: 0,
  angle1: Math.PI/6,
  angle2: 11*Math.PI/6,

  donneTonNom: function () {
    return "Je m'appelle Paul, je suis en x= " + this.x + " y=" + this.y + " endLeftX = " + this.endLeftX + "endleftY = " + this.endLeftY;
  },
  draw: function (ctx) {
    // bonne pratique : sauver le contexte courant
    // couleur courante, taille du trait, etc. avant
    // de dessiner ou de modifier qq chose dans le contexte
  
    ctx.save();

    this.endLeftX = this.x + this.rayonM * Math.cos(this.angle1);
    this.endLeftY = this.y + this.rayonM * Math.sin(this.angle1); 
  
    this.endRightX = this.x + this.rayonM* Math.cos(this.angle2);
    this.endRightY = this.y + this.rayonM* Math.sin(this.angle2);

    //ctx.scale(this.scale, this.scale);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    //ctx.translate(this.x, this.y);
    
    //console.log(this.endLeftX);
    //ctx.translate(-this.x, -this.y);
    
    ctx.translate(-this.x, -this.y);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rayonM, 0, 2 * Math.PI);
    ctx.fillStyle = this.couleur;
    ctx.fill(); // en formes pleines
    ctx.closePath();
    ctx.beginPath();
    fx = this.x;
    fy = this.y;
    ctx.moveTo(this.x, this.y)
    ctx.arc(this.x, this.y, this.rayonM, this.angle1, this.angle2, true);
    ctx.lineTo(fx, fy)
    ctx.fillStyle = "white"
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.endLeftX, this.endLeftY);
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.endRightX, this.endRightY);
    ctx.fillStyle = "black";
    ctx.stroke();
    // On restaure le contexte
    ctx.restore();
  },
  setTarget: function (x, y) {
    this.target.x = x;
    this.target.y = y;

  },
  animeBouche: function(){
    this.angle1 = 0.2;
    this.angle2 = 6.0;
  },
  boucheNormale: function(){
    this.angle1 = Math.PI/6;
    this.angle2 = 11*Math.PI/6;
  },
  move: function () {

    if (this.target.x === undefined) return;

    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;
    this.angle = Math.atan2(dy, dx);

    //this.endLeftX = this.endLeftX*this.angle;
    //this.endLeftY = this.endLeftY*this.angle;
    //this.endRightX = this.endRighX*this.angle;
    //this.endRightY = this.endRightY*this.angle;
    //console.log(this.endLeftX);

    this.x += this.vitesseX;
    this.y += this.vitesseY;
    this.angle += this.incAngle;
    this.scale += this.incScale;
    this.endLeftX = this
    if (this.scale > 2) this.incScale = -this.incScale;
    if (this.scale < 1) this.incScale = -this.incScale;
  },
};
