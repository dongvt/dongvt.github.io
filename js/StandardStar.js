import {Star} from './Star.js';
export class StandardStar extends Star{
    draw() {
        this.canvasCtx.beginPath();
        this.canvasCtx.fillStyle = `rgba(226,225,142,${this.opacity})`;
        this.canvasCtx.rect(this.x,this.y,this.sizeRadius,this.sizeRadius);
        this.canvasCtx.closePath();
        this.canvasCtx.fill();
    }
}