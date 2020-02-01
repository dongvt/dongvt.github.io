import {Game,View}  from './game.js';


const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonderwoman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];
const view = new View();
const game = new Game();

this.score = document.querySelector('#score strong')
this.question = document.getElementById('question')
this.result = document.getElementById('result')
this.info = document.getElementById('info')
this.start = document.getElementById('start')
this.response = document.getElementById('response')

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
