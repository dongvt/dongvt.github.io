import {Game,View}  from './game.js';


const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonderwoman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];
const view = new View();
const game = new Game();

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);