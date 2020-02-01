
// View Class
export class View {
    contructor() {
        this.score = document.querySelector('#score strong')
        this.question = document.getElementById('question')
        this.result = document.getElementById('result')
        this.info = document.getElementById('info')
        this.start = document.getElementById('start')
        this.response = document.getElementById('response')
    }
    
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
    show(element) {
        element.style.display = 'block';
    }
    hide(element) {
        element.style.display = 'none';
    }
    resetForm() {
        this.response.answer.value = '';
        this.response.answer.focus();
    }
    setup(game) {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
        this.resetForm();
    }
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
}

export class Game  {
    constructor(view) {
        this.view = view
    }
    start(quiz,view) {
        this.score = 0;
        this.questions = [...quiz];
        this.view.setup(this);
        this.ask();
    }
    ask(name) {
        if (this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`;
            this.view.render(this.view.question, question);
        }
        else {
            this.gameOver();
        }
    }
    check(event) {
        event.preventDefault();
        const response = this.view.response.answer.value;
        const answer = this.question.realName;
        if (response === answer) {
            this.view.render(this.view.result, 'Correct!', { 'class': 'correct' });
            this.score++;
            this.view.render(this.view.score, this.score);
        } else {
            this.view.render(this.view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
        }
        this.view.resetForm();
        this.ask();
    }
    gameOver() {
        this.view.render(this.view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        this.view.teardown();
    }
}


