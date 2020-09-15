import { GlowParticle } from './glowparticle';

export class BGcanvas {
  constructor(){
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    
    this.pixelRatio = (window.devicePixelRatio >1) ? 2:1 ;

    this.totalParticles = 1;
    this.particles = [];
    this.maxRadius = 90;
    this.minRadius = 40;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight *this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for(let i = 0; i < this.totalParticles; i++){
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor]
        )
        if(++curColor >= COLORS.length) {
          curColor = 0;
        }
      this.particles[i] = item;
    }
  }


}