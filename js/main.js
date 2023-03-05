//import {Star} from './Star.js';
import { GiantStar } from './GiantStar.js';
import { StandardStar } from './StandardStar.js';


const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');
const stars = [];
const screen = {};


const probability = (percent) => {
    return Math.random() * 100 < percent;
}

const draw = () => {
    
    ctx.clearRect(0,0,screen.width,screen.height);    
    for(const star of stars) {
        star.draw();
        star.continue();
    }
    window.requestAnimationFrame(draw);
}

const resetAnimation = () => {
    screen.width = window.innerWidth;
    screen.height = window.innerHeight;
    const starDensity = 0.0003;
    const starCount = screen.width * screen.height * starDensity; 
    
    stars.splice(0,stars.length);

    for(let i = 0; i < starCount ; i++) {
        stars.push(probability(90) ? new StandardStar(ctx,screen) : new GiantStar(ctx,screen));
        stars.at(-1).begin();
    }
    
    canvas.setAttribute('width', screen.width);
    canvas.setAttribute('height', screen.height);
}

window.addEventListener('resize', resetAnimation, false);

resetAnimation();
draw();
