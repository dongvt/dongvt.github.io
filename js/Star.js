const ranInRange = (min,max) => {
    return Math.random() * (max - min) + min;
}

export class Star {
    constructor(canvasCtx,screen) {
        this.screen = screen;
        this.canvasCtx = canvasCtx;
    }

    begin() {
        this.x = ranInRange(-50,this.screen.width - 50);
        this.y = ranInRange(15,this.screen.height);
        this.dx = ranInRange(0.1,0.5);
        this.dy = -ranInRange(0.1,0.5);
        this.sizeRadius = ranInRange(1.1,2.6);
        this.opacity = 0;
        this.fadeRatio = ranInRange(0.0001,0.001);
        this.fadeIn = true;
    }
    
    //To override
    draw() { }

    /**
     * Continue Method:
     * 1. Where the star will be located in the next frame
     * 2. How visible the star will be in the next frame
     */
    continue() {
        //Move
        this.x += this.dx;
        this.y += this.dy;
        //Fade In
        this.opacity = this.fadeIn ? this.opacity + this.fadeRatio : this.opacity - this.fadeRatio;
        if(this.opacity > 1) this.fadeIn = false;
        //Send it to screen again
        if(this.y < -10 || this.x > this.screen.width || this.opacity <= 0)
            this.begin();
    }
}