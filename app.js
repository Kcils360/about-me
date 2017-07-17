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
console.log('User name is ' + userName);

// Questions in Array
// // Questions
// var quesArray = ['was i born in WA', 'am i married', 'was i in the army', 'do i hae a degree', 'would i kill for pizza'];
// // Response
// var respArray = ['no i was born in colorado ', 'correct i was born in colorado', 'correct I am married', 'i am in fact married', 'correct i was in the army', 'wrong i was in the army', 'correct i do not have a degree', 'unfortunately i do not', 'correct because murder is illegal, but i do want pizza', 'wrong! murder is illegal, i still want pizza'];
// // User Answer boolean
// var possAns = ['Y', 'YES', 'N', 'NO'];
//


// Question 1
function question1(){
  // var userResponse = prompt(quesArray[0], 'YES or NO').toUpperCase();
  // console.log(userResponse);
  // for(var i = 0; i < possAns.length; i++){
  //   if (userResponse === possAns[2] || possAns[3]) {
  //     alert(respArray[1]);
  //     break;
  //   }
  //   if (userResponse === possAns[0] || possAns[1]){
  //     alert(respArray[0]);
  //     break;
  //   }
  // }
  var cityBorn = prompt('Was I born in Washington?') .toLowerCase();

  if (cityBorn === 'yes' || cityBorn === 'y') {
    alert ('Nope! I was born in Denver.');
    console.log('City question user stated ' + cityBorn);

  } else if (cityBorn === 'no' || cityBorn === 'n') {
    alert ('Indeed, I was born in Denver.');
    console.log('City question user stated ' + cityBorn);
    numCorrect.push (1);
  } else {
    alert ('Please answer with "yes" or "no"');
    console.log('City question user stated ' + cityBorn);
  }
}
question1();

  // Question 2
function question2(){
  // var userResponse = prompt(quesArray[1], 'YES or NO').toUpperCase();
  // if (userResponse === possAns[0] || possAns[1]){
  //   alert(respArray[2]);
  // } else {
  //   alert (respArray[3]);
  // }
  var married = prompt('Am I married?') .toLowerCase();

  if (married === 'yes' || married === 'y') {
    alert ('Correct!  Happily, since 2005!');
    console.log('Married question user stated ' + married);
    numCorrect.push (1);

  } else if (married === 'no' || married === 'n') {
    alert ('In fact I am, since 2005.');
    console.log('Married question user stated ' + married);

  } else {
    alert ('Please answer with "yes" or "no"');
    console.log('Married question user stated ' + married);
  }
}
question2();

  // Question 3
function question3(){
  // var userResponse = prompt(quesArray[2]).toUpperCase();
  // if (userResponse === possAns[0] || possAns[1]){
  //   alert(respArray[4]);
  // } else {
  //   alert(respArray[5]);
  // }
  var army = prompt('Was I ever in the Army?') .toLowerCase();
  if (army === 'yes' || army === 'y') {
    alert ('Yep!  I joined in 2006.');
    console.log('Army question user stated ' + army);
    numCorrect.push (1);

  } else if (army === 'no' || army === 'n') {
    alert ('Wrong, I joined the Army in 2006.');
    console.log('Army question user stated ' + army);

  } else {
    alert ('Please answer with "yes" or "no"');
    console.log('Army question user stated ' + army);
  }
}
question3();

  // Question 4
function question4(){
//   var userResponse = prompt(quesArray[3]).toUpperCase();
//   if (userResponse === possAns[2] || possAns[3]){
//     alert(respArray[6]);
//   } else {
//     alert(respArray[7]);
//   }
  var degree = prompt('Do I have a degree?') .toLowerCase();

  if (degree === 'yes' || degree === 'y') {
    alert ('Sadly, no.  I haven\'t attended much school.');
    console.log('Degree question user stated ' + degree);

  } else if (degree === 'no' || degree === 'n') {
    alert ('Correct.  I havne\'t attended much school.');
    console.log('Degree question user stated ' + degree);
    numCorrect.push (1);

  } else {
    alert ('Please answer with "yes" or "no"');
    console.log('Degree question user stated ' + degree);
  }
}
question4();

// Question 5
function question5(){
  // var userResponse = prompt(quesArray[4]).toUpperCase();
  // if (userResponse === possAns[2] || possAns[3]){
  //   alert(respArray[8]);
  // } else {
  //   alert(respArray[9]);
  // }
  var pizza = prompt('Would I kill for some pizza?') .toLowerCase();

  if (pizza === 'yes' || pizza === 'y') {
    alert ('Dude, no! Murder is illegal! But I really do want some pizza');
    console.log('Pizza question user stated ' + pizza);

  } else if (pizza === 'no' || pizza === 'n') {
    alert ('Right, because murder is illegal, but I really do want some pizza.');
    console.log('Pizza question user stated ' + pizza);
    numCorrect.push (1);

  } else {
    alert ('Please answer with "yes" or "no"');
    console.log('Pizza question user stated ' + pizza);
  }
}
question5();
//
//   // Question 6
function question6(){
  var x = 4;
  while (x > 0 && numTopings !== 4) {
    var numTopings = parseInt(prompt('How many toppings do I prefer on my pizza?', 'Number'));
    console.log('Number topping question stated ' + numTopings);
    if (numTopings < 4) {
      alert('That\s almost plain, more please!');
      x--;

    } else if (numTopings > 4) {
      alert('Dude, don\'t overload the pie! Try again.');
      x--;
    } else if (numTopings === 4) {
      alert('Bingo, I think 4 toppings is optimal pizza yummage.');
      numCorrect.push (1);
      // } else if (x === 5 && numTopings !== 4 ) {
      //   alert('Sorry, you are out of guesses.  Reset and try again.');
        // break;
    //   window.location.reload();
    } else {
      alert('Please press a number.');
      x--;
    }
  }
  if (x === 0) {
    alert('No more guesses. I prefer 4 toppings for optimal yummage.');
  }
}
question6();
  // Question 7
function question7(){
  var favTopings = ['PEPPERONI', 'SAUSAGE', 'JALEPENO', 'CHEESE'];
  var guessTopping = 7;

  while (guessTopping > 0) {
    var ansToping = prompt('What is one of my favorite pizza toppings?', 'Topping').toUpperCase();
    console.log('Favorite topping question stated ' + ansToping);
    for (var i = 0; i < favTopings.length; i++) {
      if (ansToping === favTopings[i]) {
        alert('Nice guess, ' + ansToping + ' makes a pizza great!' );
        guessTopping = -1;
        numCorrect.push (1);
        break;
      }
    }
    if (guessTopping > 1) {
      guessTopping--;
      alert('Sorry, incorrect. ' + (guessTopping - 1) + ' guesses left.');
    }
    if (guessTopping === 1) {
      alert('Out of guesses.');
      guessTopping = -1;
      break;
    }
  }
}
question7();
console.log('User got ' + numCorrect.length + ' correct');
alert('You got ' + numCorrect.length + ' answers correct out of 7. Thank you for playing, I hope you learned something!');
// this works now
