import {Star} from './Star.js';


const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');
const stars = [];
const screen = {};

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
        stars.push(new Star(ctx,screen));
        stars.at(-1).begin();
    }
    
    canvas.setAttribute('width', screen.width);
    canvas.setAttribute('height', screen.height);
}

window.addEventListener('resize', resetAnimation, false);

resetAnimation();
draw();
