//01-20-2019
//cleared page
//need to fix rock paper scissors

	function webButton() {
/*
	alert("*broken* Rock, Paper, Scissors!")
	
	var userHand = prompt("Rock, Paper, or Scissors?"); //user input
	var handPicker = Math.floor(Math.random() * 3 + 1 ); //npc input
	var stopWin = false;

		if (userHand == "Rock") {
			var userScore = 1;

		} else if (userHand == "Paper") {
			var userScore = 2;

		} else if (userHand == "Scissors") {
			var userScore = 3;
		};

		//npc value assigner
		if (handPicker === 1) {
			npcHand = "Rock";
			var npcScore = 1;

		} else if (handPicker === 2) {
			npcHand = "Paper";
			var npcScore = 2;

		} else if (handPicker === 3) {
			npcHand = "Scissors";
			npcScore = 3;
		};

		//win validation
		if (userScore == npcScore) { //tie
			win = undefined;

		} else if (userScore + npcScore === 3) { //rock & paper
			if (userScore < npcScore) {
				win = true;
			} else { 
				win = false; 

		} else if (userScore + npcScore === 4) { //rock & scissors
			if (userScore < npcScore) {
				win = true;
			} else {
				win = false;

		} else if (userScore + npcScore === 5) { //paper & scissors
			if (userScore > npcScore) {
				 win = true;
			} else {  
				win = false; 
			}

		} else if (userScore != "Rock" || userScore != "Paper" || userScore != "Scissors") {
			var stopWin = true;
			alert("Invalid Input");
		};

		//announce win
		if (win === undefined) {
			stateWin = "Tie!";

		} else if (win = true) {
			stateWin = "You Win!";

		} else if (win = false) {
			stateWin = "You Lose!";
		};

		if (stopWin === false) {
			alert("You:" + " " + userHand + "      " + stateWin + "      " + "NPC:" + " " + npcHand);
		} else {
			alert("Try Again!")
		}

//Its way too late, lets leave it at this, more tomorrow
*/

//01-21-2019
//Will return tp rpc later. Want to explore scopes a bit.
//I've already spent an hour trying to fix the WAMP server im running >:[
//Very distracted night :( Didn't do much other than mess with the rpc

//01-22-2019
//Exploring scopes like I meant to last night
//Started working on a "payoff calculator", will upload to Github
//The html part is nearly done
//need to figure out how to properly pull data from HTML forms

/*
	var x = {
		foo: 1,
		bar: 2,
		baz: 3
	};

	var y = {
		foo: 10,
		bar: 20,
		baz: 30
	}

	function changeX() {
		z = 0;
		function math() {
		z = x.foo * y.bar
	}
	math();
	}

	changeX();
	alert(z);
*/

//Started doing the math needed for the Pay-Off calculator, still can't pull the data from the HTML into
// javascript, will research tomorrow.

//01-23-2019 : in reference to payoffcalculator.js
//Found out what was wrong with last nights script. I was referencing the .js file before the HTML could assign
//user input (doh).
//documentGetById() will not pull data from home.php unless the js is in a function (?)
//Now i've found out I need to explicitly coerce a string to an interger because the HTML forms output strings
//found the parseFloat() and parseInt() functions that will do that ^^^
//Had to removed remainder because the remainder variable because it sometimes rounds numbers, which is no good.

//01-24-2019
//Cleaned up some stuff from yesterday
//spent most of today creating a valid input checker
//Almost works but i'm having trouble actually making it spit out the right thing
//will fix tomorrow

//01-26-2018
//need to test some things
//I finished the Pay-Off Calculator! Next I think I will redo the Rock, Paper, Scissors game to hopefully cleanup
//what I've already written and get it working properly, maybe just start over
//Some other project ideas:
/*
	Tic-Tac Toe
	Random background color-changer
	Clicker counter game
	Start getting into RSS feed / API / Web-shit
	Dice
	Deck of Cards / Black Jack?
*/
//good short day tonight, its the next day so I'll commit later too

var bar = 1;
var checker = false;

function changeBar() {
	bar ++
	checker = true;
}

changeBar();

if (checker == true) {
	alert(bar);
}

//01-27-2019
//Having trouble figuring out how to switch between placing X's and O's
//Feels like im missing something in the ol' dev toolbox to know how to do this
//Thought this would be eaiser/make more sense :,[
//More research later today

};

	function contactButton() {
		alert("c016yinbox@gmail.com");
	};
