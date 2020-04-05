import Auth from './auth.js';
import { makeRequest } from './authHelpers.js';

const submitButton = document.getElementById("submitButton");
const veiw         = document.getElementById("view");
const auth = new Auth();

submitButton.addEventListener('click',(evt) => {
    evt.preventDefault();
    auth.login(myCallback);
});

async function myCallback() {
    let htmlValue = "";
    const data = await makeRequest('posts','GET',null,auth.token);
    for(const item of data) {
        htmlValue += '<div>'
        Object.entries(item).forEach(element => {
            const key = element[0];
            const value = element[1];

            htmlValue += `${key} => ${value}<br>`;
        });
        htmlValue += '</div>';
    }
    veiw.innerHTML = htmlValue;
}