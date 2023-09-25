// importing user import library
const prompt = require('prompt-sync')({sigint: true});

// The board object used to save the current status of a gameplay
let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
board[Number(position)] = mark;
}

// TODO: print the game board as described at the top of this code skeleton
// Will not be tested in Part 1
let arr = [1,2,3,4,5,6,7,8,9];
function printBoard(position, mark) {
if (board[position] === mark ){
    arr[position-1] = mark;
  }
  console.log('\n'+arr[0]+'|' +arr[1]+ '|' +arr[2]+ '\n-----\n' +arr[3]+ '|' +arr[4]+ '|' +arr[5]+'\n-----\n' +arr[6]+ '|' +arr[7]+ '|' + arr[8]+'\n');
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
// position is an input String
function validateMove(position) {
  let valid;
  if (Number(position) < 0 || Number(position) > 9) {
    console.log('Out of Bound!');
    valid = false;
  } else if ((position <= 9 || position >= 0) && board[position] === ' ') {
    valid = true;
  } else {
    console.log('Invalid input! This cell is occupied!!');
    valid = false;
  }
  return valid;
}


// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (innerloop = 0; innerloop < 8; innerloop++){
      if(
        board[winCombinations[innerloop][0]] ===
        board[winCombinations[innerloop][1]] &&
        board[winCombinations[innerloop][1]] ===
        board[winCombinations[innerloop][2]] &&
        board[winCombinations[innerloop][2]] === player
      ){
        return true;
      }
    }
    return false;
  }
// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
for (property in board){
    for (check = 0; check < 9; check++){
        if (board[check] === ' '){
        return false;
        }
      } 
}
return true;
}
//This function will play the game again.
function Oncemore (A){
  resetboard();//reset the board
  resetprintBoard();//reset the display board
  let D = A;//passing thee X or Y to variable D
  let startgame = turns(D);
  console.log('\n'+startgame+' goes first!\n');//X or Y will start
  let in_array = [];
printBoard();
//This function print and update the current situation on board.

//This loop below will keep on looping as long as the variable 'letsplay' is false.
let letsplay = false;
while(letsplay === false){
let plymark = startgame;
let plymove = prompt ('Enter your position from 1 to 9: ');
//User were asked on their input mark and positions on the tic-tac-toe board.

let plyposi = Number(plymove); // This variable corrects the position keyed in by the user based on the index start from 0 and change it into numbers.
let validMove = validateMove(plyposi); //This variable store the boolean value return by the validateMove function.
validMove === true? markBoard(plyposi, plymark):console.log('Try Again!'); //This line check if the retun boolean of validateMove is true, the board will be marked by the keyed in input and positions, if it is false the string will be displayed.
printBoard(plyposi, plymark); // Display on the update of the board.
if (validMove === true){
  in_array.push(plymark);
}
let win = checkWin(plymark);
let full = checkFull();

switch (true){
  case win === true : 
  console.log("Congratulations! player "+ in_array[in_array.length-1]+" Wins!");
  letsplay = true;
  break;
  case full === true :
  console.log("Oh! It's a Tie!")
  letsplay = true;
  break;
  default : 
  if(validMove === true){
    startgame === 'X' ? startgame = 'O' : startgame = 'X';
    plymark = turns(startgame);
    console.log('\n'+plymark+' turns now!\n');
    };
  letsplay = false;
}
}
Gameon();
}
//This function ask the first player marks
function turns (turn){
  let playermark;
  if (turn === 'X'){
    playermark = 'X';
  }else if (turn === 'O'){
    playermark = 'O';
  }
  return playermark;
}

//This function tells who's turn next
/*function NextTurn (str){ 
  str === 'X' ? console.log("'O' turns now!\n") : console.log("'X' turns now!\n");
  }*/

  //This function reset the board
function resetboard(){
  for(i = 1; i < 10; i++){
    board[i] = ' ';
  }
  return board;
}

function resetprintBoard (){
  for (i=0;i<=arr.length-1;i++){
    arr[i] = i+1;
  }

//Ask User for more games or not?
}
function Gameon (){
let playagain = prompt ('Would you want to play some more?y/n ');
if (playagain === 'y'){
let first_turn = prompt ("Which goes first? X or O?  ");
switch (true){
  case first_turn === 'x'||'X' : Oncemore(first_turn.toUpperCase());
  break;
  case first_turn === 'o'||'O' : Oncemore(first_turn.toUpperCase());
  break;
  default : Oncemore('X');
}
}else
{
  console.log('Have a nice day!');}
}




//This is the main Code

let startgame = turns('X');
console.log('\n'+startgame+' goes first!\n');
let in_array = [];
printBoard();
//This function print and update the current situation on board.

//This loop below will keep on looping as long as the variable 'letsplay' is false.
let letsplay = false;
while(letsplay === false){
//let playermark = prompt ('Enter your mark: ');
let plymark = startgame;
let plymove = prompt ('Enter your position from 1 to 9: ');
//User were asked on their input mark and positions on the tic-tac-toe board.

let plyposi = Number(plymove); // This variable corrects the position keyed in by the user based on the index start from 0 and change it into numbers.
let validMove = validateMove(plyposi); //This variable store the boolean value return by the validateMove function.
validMove === true? markBoard(plyposi, plymark):console.log('Try Again!'); //This line check if the retun boolean of validateMove is true, the board will be marked by the keyed in input and positions, if it is false the string will be displayed.
printBoard(plyposi, plymark); // Display on the update of the board.
if (validMove === true){
  in_array.push(plymark);
}
let win = checkWin(plymark);
let full = checkFull();

switch (true){
  case win === true : 
  console.log("Congratulations! player "+ in_array[in_array.length-1]+" Wins!");
  letsplay = true;
  break;
  case full === true :
  console.log("Oh! It's a Tie!")
  letsplay = true;
  break;
  default : 
  if(validMove === true){
  startgame === 'X' ? startgame = 'O' : startgame = 'X';
  plymark = turns(startgame);
  console.log('\n'+plymark+' turns now!\n');
  };
  letsplay = false;
}}

//Asking in the main code for the user to play again or not
let playagain = prompt ('Would you want to play some more?y/n ');
if (playagain === 'y'){
let first_turn = prompt ("Which goes first? X or O?  ");
switch (true){
  case first_turn === 'x'||'X' : Oncemore(first_turn.toUpperCase());
  break;
  case first_turn === 'o'||'O' : Oncemore(first_turn.toUpperCase());
  break;
  default : Oncemore('X');
  break;
}
}
else if(playagain === 'n'){console.log('Have a nice day!');}