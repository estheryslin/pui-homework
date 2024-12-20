const PI2 = Math.PI * 2;

export class GlowParticle {
  constructor(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = (Math.random() - 0.5) * 4; // velocity
    this.vy = (Math.random() - 0.5) * 4; //velocity
    this.sinValue = Math.random();
  }

  animate(ctx, stageWidth, stageHeight) {
    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x = 10; 
    } else if (this.x > stageWidth) {
      this.vx *= -1; 
      this.x = stageWidth - 10; 
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y = 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y = stageHeight - 10;
    }

    ctx.beginPath();
    
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    const g = ctx.createRadialGradient(
        this.x,
        this.y,
        this.radius * 0.01,
        this.x,
        this.y,
        this.radius
      );
      
      g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`); // opacity
      g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`); // transparency
      
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();

    this.sinValue += 0.1;
  }
}
