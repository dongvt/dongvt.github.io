const JSONString = "";

let completeListString;
let completeListObject;

export class ListItem {
    constructor(elements) {
        this.description = "";
        this.status = false;
        this.elements = elements;
    }

    getList() {
        completeListString = localStorage.getItem('toDoList');
        completeListObject = JSON.parse(completeListString);
    }

    saveAll() {
        completeListString = JSON.stringify(completeListObject);
        localStorage.setItem('toDoList',completeListString);
    }
    
    addNewToDo(description){
        'use strict';
        this.description = this.elements.description.value;
        
        //Get item ToDo List
        this.getList();

        if (completeListObject === null) {
            completeListObject = new Array();
        }

        completeListObject.push(this);

        //Reset text field
        this.elements.description.value = "";
        this.saveAll();
        this.showList();
    }

    removeToDo(){
        localStorage.clear();
    }

    completeToDo(description) {
        'use strict';
        this.getList();

        const itemToCheck = completeListObject.find(item => item.description == description);
        if (itemToCheck.status)
            itemToCheck.status = false;
        else
            itemToCheck.status = true;

        this.saveAll();
        this.showList();
    }

    showList(list) {
        'use strict';
        if(typeof list === 'undefined') {
            this.getList(); //Get full list when there are not filters
            list = completeListObject;
        }
        if (list === null) return;

        let done = "";
        let HTMLItems = "";
        let itemLeft = 0;

        for(const item of list) {
            if (item.status) done = "checked";
            else {
                itemLeft++;
                done = "unchecked";
            } 

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
        this.elements.filter.querySelector("#pending").innerHTML = itemLeft;
    }

    dropToDo(description) {
        //This part is kind of long:
        //1. Find the item we want to drop in the list
        //2. Get the index of that item
        //3. Delete the item using the index.

        this.getList();

        const itemToDrop = completeListObject.find(item => item.description == description);
        completeListObject.splice(completeListObject.indexOf(itemToDrop),1);

        this.saveAll();
        this.showList();
    }

    filter(evt) {
        this.getList();
        const filterType = evt.target.id;
        let newList = completeListObject;

        if (filterType == "filterCompleted"){
            newList = completeListObject.filter(item => item.status);
        } 
        else if (filterType == "filterActive") {
            newList = completeListObject.filter(item => !item.status);
        }

        this.showList(newList);
    }
}

export class Elements{
    constructor(){
        this.screen = "";
        this.addButton = "";
        this.description = "";
        this.filter = "";
    }
}