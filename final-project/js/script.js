import { GlowParticle } from "./particle.js";

const COLORS = [
    { r: 205, g: 182, b: 232 }, // In-Between Purple
    { r: 240, g: 192, b: 239 }, // In-Between Pink
    { r: 172, g: 226, b: 240 }, // In-Between Blue
    { r: 175, g: 234, b: 186 }, // In-Between Green
    { r: 239, g: 240, b: 187 }  // In-Between Yellow    
    
];

class App {
  constructor() {
    this.canvas = document.getElementById("backgroundCanvas"); // Use existing canvas
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.totalParticles = 8; // Adjust number of particles as needed
    this.particles = [];
    this.maxRadius = 1000;
    this.minRadius = 400;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];
    for (let i = 0; i < this.totalParticles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor]
      );

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }
      this.particles.push(item);
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.particles.length; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}

window.onload = () => {
  new App();
};
