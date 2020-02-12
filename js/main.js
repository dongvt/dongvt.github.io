import {ListItem,Elements} from './modules.js';
const htmlElements = new Elements();
//Set container
htmlElements.screen = document.getElementById("listContainer");
htmlElements.description = document.getElementById("addTodoInput");
htmlElements.addButton = document.getElementById("addToDoButton");

const toDo = new ListItem(htmlElements);
//Show storeged list
toDo.showList();

//Listeners
htmlElements.addButton.addEventListener('touchend',() => toDo.addNewToDo(),false);
htmlElements.screen.addEventListener('touchend',event => {
    //Get the description
    //Because the description is in another div, but still inside item div
    //We get the parent, and inside the parent make a query selector for the description
    const description = event.target.parentElement.querySelector(".description").innerHTML;
    const buttonClicked = event.target.getAttribute("class");
    if (buttonClicked === "drop") {
        toDo.dropToDo(description);
    }
        
    if (buttonClicked === "checked") {
        
    }
},false);