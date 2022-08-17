// User input name here
var username = '';

// user inputs question for the eightBall here
var userQuestion = 'Will I marry Tarzan?';

// if user doesnt input a name this appears
if (username === ''){
console.log(`Hello!`);
}

//if user types in anything in the username box, this appears with their input
else if (username !== ''){
console.log(`Hello, ${username}!`);
}

//this Displays the question they asked 
console.log( `You asked, ${userQuestion}`);

//random numer is generated 0-7 for the eightBall the spit out an answer
var randomNumber = Math.floor(Math.random()*8 );

//told to create in step 6 for later, seems like you can skip it and just use var randomNumber
// in the control flow. I feel I can use 'randomNumberForEightBall' to save the step
// was told to leave it and empty string '' but I just make it equal to randomNumber.
// seems redundant to use randomNumber and eightBall. Probable to keep it clean i guess so you
// know what is what with each far 
var eightBall = randomNumber;

// if eightball is equal to 0, the console spits out this statement
if (eightBall === 0){
    console.log('It is certain , my dear!');
}

// if eightball is equal to 1, the console spits out this statement
else if (eightBall === 1){
    console.log('It is decidedly so!');
}

// if eightball is equal to 2, the console spits out this statement
else if (eightBall === 2){
    console.log('My head hurts! Reply hazy try again.');
}

// if eightball is equal to 3, the console spits out this statement
else if (randomNumber === 3){
    console.log('Off on lunch. Cannot predict now.');
}
    
// if eightball is equal to 4, the console spits out this statement

else if (randomNumber === 4){
    console.log('Do not count on it. ');
}

// if eightball is equal to 5, the console spits out this statement
else if (randomNumber === 5){
    console.log('My sources say no. Bummer.');
}

// if eightball is equal to 6, the console spits out this statement
else if (randomNumber === 6){
    console.log('Outlook not so good.');
}

// if eightball is equal to 7, the console spits out this statement
else if (randomNumber === 7){
    console.log('Signs point to yes!!!');
}
