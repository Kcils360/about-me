//
// var userResponse = prompt(quesArray[i]).toUpperCase();
// if (userResponse === possAns[i]){
//   alert(respArray[i]);
// }
'use strict';
// Number of correct answers
var numCorrect = [];

// Opening dialogue
alert ('Let\'s play a guessing game about me!');
var userName = prompt('First, what is your name?', 'Name Here');
alert ('Thank you ' + userName + '. Click OK to begin.');

// Questions in Array
// Questions
var quesArray = ['was i born in WA', 'am i married', 'was i in the army', 'do i hae a degree', 'would i kill for pizza'];
// Response
var respArray = ['no i was born in colorado ', 'correct i was born in colorado', 'correct I am married', 'i am in fact married', 'correct i was in the army', 'wrong i was in the army', 'correct i do not have a degree', 'unfortunately i do not', 'correct because murder is illegal, but i do want pizza', 'wrong! murder is illegal, i still want pizza'];
// User Answer boolean
var possAns = ['Y', 'YES', 'N', 'NO'];



// Question 1
function question1(){
  var userResponse = prompt(quesArray[0], 'YES or NO').toUpperCase();
  console.log(userResponse);
  for(var i = 0; i < possAns.length; i++){
    if (userResponse === possAns[2] || possAns[3]) {
      alert(respArray[1]);
      break;
    }
    if (userResponse === possAns[0] || possAns[1]){
      alert(respArray[0]);
      break;
    }
  }
}
question1();

  // Question 2
function question2(){
  var userResponse = prompt(quesArray[1], 'YES or NO').toUpperCase();
  if (userResponse === possAns[0] || possAns[1]){
    alert(respArray[2]);
  } else {
    alert (respArray[3]);
  }
}
question2();

  // Question 3
function question3(){
  var userResponse = prompt(quesArray[2]).toUpperCase();
  if (userResponse === possAns[0] || possAns[1]){
    alert(respArray[4]);
  } else {
    alert(respArray[5]);
  }
}
question3();

  // Question 4
function question4(){
  var userResponse = prompt(quesArray[3]).toUpperCase();
  if (userResponse === possAns[2] || possAns[3]){
    alert(respArray[6]);
  } else {
    alert(respArray[7]);
  }
}
question4();

// Question 5
function question5(){
  var userResponse = prompt(quesArray[4]).toUpperCase();
  if (userResponse === possAns[2] || possAns[3]){
    alert(respArray[8]);
  } else {
    alert(respArray[9]);
  }
}
question5();
//
//   // Question 6
// function question6(){
//   var x = 0;
//   while (x < 4 && numTopings !== 4) {
//     var numTopings = parseInt(prompt('How many toppings do I prefer on my pizza?'));
//     console.log('Number question stated ' + numTopings);
//     if (numTopings < 4) {
//       alert('That\s almost plain, more please!');
//       x++;
//
//     } else if (numTopings > 4) {
//       alert('Dude, don\'t overload the pie! Try again.');
//       x++;
//     } else if (numTopings === 4) {
//       alert('Bingo, I think 4 toppings is optimal pizza yummage.');
//       numCorrect.push (1);
//       // } else if (x === 5 && numTopings !== 4 ) {
//       //   alert('Sorry, you are out of guesses.  Reset and try again.');
//         // break;
//     //   window.location.reload();
//     } else {
//       alert('Please respond with an integer.');
//       x++;
//     }
//   }
//
//   if (guessTopping > 0) {
//     guessTopping--;
//     alert('Guess again.' + guessTopping + ' guesses left.');
//   }
//   if (guessTopping === 0) {
//     alert('Out of guesses.');
// }
// question6();
//   // Question 7
// function question7(){
//   var favTopings = ['PEPPERONI', 'SAUSAGE', 'JALEPENO', 'CHEESE'];
//   var guessTopping = 6;
//
//   while (guessTopping > 0) {
//     var ansToping = prompt('What is one of my favorite pizza toppings?').toUpperCase();
//     console.log('Favorite question stated ' + ansToping);
//     for (var i = 0; i < favTopings.length; i++) {
//       if (ansToping === favTopings[i]) {
//         alert('Nice guess, ' + ansToping + ' makes a pizza great!' );
//         guessTopping = -1;
//         numCorrect.push (1);
//         break;
//       }
//     }
//     if (guessTopping > 0) {
//       guessTopping--;
//       alert('Guess again.' + guessTopping + ' guesses left.');
//     }
//     if (guessTopping === 0) {
//       alert('Out of guesses.');
//     }
//   }
// }
//
// question7();

alert('You got ' + numCorrect.length + ' answers correct. Thank you for playing!  I hope you learned something.');
// this works now
