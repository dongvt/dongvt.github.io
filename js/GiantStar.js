import {Star} from './Star.js';

export class GiantStar extends Star {
    draw() {
        this.canvasCtx.beginPath();
        this.canvasCtx.fillStyle = `rgba(200,175,200,${this.opacity})`;
        //this.canvasCtx.rect(this.x,this.y,this.sizeRadius,this.sizeRadius);
        this.canvasCtx.arc(this.x, this.y, this.sizeRadius, 0, 2 * Math.PI);
        this.canvasCtx.closePath();
        this.canvasCtx.fill();
    }

}