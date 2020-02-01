import {Game,View}  from './game.js';


const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonderwoman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];
const view = new View();
const game = new Game(view);

view.score = document.querySelector('#score strong')
view.question = document.getElementById('question')
view.result = document.getElementById('result')
view.info = document.getElementById('info')
view.start = document.getElementById('start')
view.response = document.getElementById('response')

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
