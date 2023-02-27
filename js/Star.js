const ranInRange = (min,max) => {
    return Math.random() * (max - min) + min;
}

export class Star {
    constructor(canvasCtx,screen) {
        this.screen = screen;
        this.canvasCtx = canvasCtx;
    }

    begin() {
        this.x = ranInRange(0,this.screen.width - 50);
        this.y = ranInRange(15,this.screen.height);
        this.dx = ranInRange(0.1,1);
        this.dy = -ranInRange(0.1,1);
        this.sizeRadius = ranInRange(1.1,2.6);
        this.opacity = 0;
        this.fadeRatio = ranInRange(0.001,0.01);
        this.fadeIn = true;
    }
    

    draw() {
        this.canvasCtx.beginPath();
        this.canvasCtx.fillStyle = `rgba(226,225,142,${this.opacity})`;
        this.canvasCtx.rect(this.x,this.y,this.sizeRadius,this.sizeRadius);
        this.canvasCtx.closePath();
        this.canvasCtx.fill();
    }

    continue() {
        //Move
        this.x += this.dx;
        this.y += this.dy;
        //Fade In
        this.opacity = this.fadeIn ? this.opacity + this.fadeRatio : this.opacity - this.fadeRatio;
        if(this.opacity > 1) this.fadeIn = false;

        if(this.y < -10 || this.x > this.screen.width || this.opacity <= 0)
            this.begin();
    }
}