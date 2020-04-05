const button = document.getElementById("reset");
const board = document.getElementById("container");
const boxes = document.getElementsByClassName("box");

let turn = false; //false -> player one true -> player 2
let turnCount = 0;
let size = Math.sqrt(boxes.length); /* If it is a squere the box will give us the dimention
                                    ** Tic tac toe will be always 3x3*/

//The box array is a lineal array, to actualy check the resuts
//We would need to put into a matrix (two dimension array)
const gameMatrix = (boardObject) => {
    //JS has no matrix, so I create an array of arrays
    let gMatrix = [size];
    for(let i = 0 ; i < size ;i++)
        gMatrix[i] = [size];
   //then fill the new matrux information, with the boxes content
    let i = 0;
    for (let x = 0; x < size ;x++) {
        for (let y = 0; y < size ;y++) {
            gMatrix[x][y] = boxes[i++].innerHTML;
        }
    }
    return gMatrix;
}

//Game validator
function validateWinGame(player /*the X or the O*/){
    const boardGame = gameMatrix();

    //no winner
    if (turnCount === 8) {
        alert("drown");
        return true;
    } 
    turnCount++;

    //check all rows
    for (let x = 0; x < size ;x++) {
        for (let y = 0; y < size ;y++) {
            if (boardGame[x][y] !== player)
                break; //Go next in the first for loop (the x one)
            if (y === size-1) {
                alert("win in row " + player)
                return true; //stop function excecution
            }
        }
    }

    //check all columns
    for (let x = 0; x < size ;x++) {
        for (let y = 0; y < size ;y++) {
            if (boardGame[y][x] !== player)
                break; //Go next in the first for loop (the x one)
            if (y === size-1) {
                alert("won in column " + player)
                return true; //stop function excecution
            }
        }
    }

    //check diag
    for (let y = 0; y < size ;y++) {
        if (boardGame[y][y] !== player)
            break; 
        if (y === size-1) {
            alert("won in diag " + player)
            return true; //stop function excecution
        }
    }

    //check anti-diag
    for (let y = 0; y < size ;y++) {
        if (boardGame[y][(size - 1) - y] !== player)
            break; 
        if (y === size-1) {
            alert("won in anti-diag " + player)
            return true; //stop function excecution
        }
    }

    return false;
}

//Clear the game to begin
function resetGame(){
    for (let i = 0 ; i < boxes.length;i++){
        boxes[i].innerHTML = ""; 
    }
    turn = false;
    turnCount = 0;
}

//Reset button listener
button.addEventListener("click",resetGame,false);

//Board listener.
board.addEventListener("click",function(event) {
    const cell = event.target;
    let turnValue = "";
    //if the element is nor empty don't do anything
    if (event.target.innerHTML === "") {
        if (turn) {
            turnValue = "O";
            turn = false;
        }
        else {
            turnValue = "X";
            turn = true;
        } 
        cell.innerHTML = turnValue;
        if (validateWinGame(turnValue)){
            resetGame();
        }
    }        

},false)