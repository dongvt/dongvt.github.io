const JSONString = "";

export class ListItem {
    constructor(elements) {
        this.description = "";
        this.status = false;
        this.elements = elements;
    }

    getList() {
        
    }

    saveAll() {
        
    }
    
    addNewToDo(description){
        'use strict';
        this.description = this.elements.description.value;
        
        //Get item ToDo List
        let completeListString = localStorage.getItem('toDoList');
        let completeListObject = JSON.parse(completeListString);
        if (completeListObject === null) {
            completeListObject = new Array();
        }

        completeListObject.push(this);

        completeListString = JSON.stringify(completeListObject);
        localStorage.setItem('toDoList',completeListString);

        this.showList();
        
    }

    removeToDo(){
        localStorage.clear();
    }

    completeToDo(description) {
        'use strict';
        let completeListString = localStorage.getItem('toDoList');
        let completeListObject = JSON.parse(completeListString);

        const itemToCheck = completeListObject.find(item => item.description == description);
        if (itemToCheck.status)
            itemToCheck.status = false;
        else
            itemToCheck.status = true;

        completeListString = JSON.stringify(completeListObject);
        localStorage.setItem('toDoList',completeListString);
        this.showList();
    }

    showList() {
        'use strict';
        const completeListString = localStorage.getItem('toDoList');
        const completeListObject = JSON.parse(completeListString);
        let done = "";
        let HTMLItems = "";

        if (completeListString === null) return;

        for(const item of completeListObject) {
            if (item.status) done = "checked";
            else done = "unchecked";
            HTMLItems += `<div class="item">
            <div class="checked">
                <img src="images/${done}.png" atl = "Delete Item" class="checkedIcon"/>
            </div>
            <div class="description">${item.description}</div>
            <div class="drop">
                <img src="images/delete.png" atl = "Delete Item" class="dropIcon"/>
            </div>
            </div>`;
        }
        this.elements.screen.innerHTML = HTMLItems;
    }

    dropToDo(description) {
        //This part is kind of long:
        //1. Find the item we want to drop in the list
        //2. Get the index of that item
        //3. Delete the item using the index.

        let completeListString = localStorage.getItem('toDoList');
        let completeListObject = JSON.parse(completeListString);

        const itemToDrop = completeListObject.find(item => item.description == description);
        completeListObject.splice(completeListObject.indexOf(itemToDrop),1);

        completeListString = JSON.stringify(completeListObject);
        localStorage.setItem('toDoList',completeListString);
        this.showList();
    }

    filter() {
        
    }
}

export class Elements{
    constructor(){
        this.screen = "";
        this.addButton = "";
        this.description = "";
    }
}