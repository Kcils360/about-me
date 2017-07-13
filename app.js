'use strict';
 // Number of correct answers
var numCorrect = [];

alert ('Let\'s play a guessing game about me!');
// Question 1
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
// Question 2
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
// Question 3
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
// Question 4
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
// Question 5
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
// //
// Question 6

var x = 0;
while (x < 4 && numTopings !== 4) {
  var numTopings = parseInt(prompt('How many toppings do I prefer on my pizza?'));
  console.log('Number question stated ' + numTopings);
  if (numTopings < 4) {
    alert('That\s almost plain, more please!');
    x++;

  } else if (numTopings > 4) {
    alert('Dude, don\'t overload the pie! Try again.');
    x++;
  } else if (numTopings === 4) {
    alert('Bingo, I think 4 toppings is optimal pizza yummage.');
    numCorrect.push (1);
    // } else if (x === 5 && numTopings !== 4 ) {
    //   alert('Sorry, you are out of guesses.  Reset and try again.');
      // break;
  //   window.location.reload();
  } else {
    alert('Please respond with an integer.');
    x++;
  }
}

// Question 7
var favTopings = ['PEPPERONI', 'SAUSAGE', 'JALEPENO', 'CHEESE'];
var guessTopping = 6;

while (guessTopping > 0) {
  var ansToping = prompt('What is one of my favorite pizza toppings?').toUpperCase();
  console.log('Favorite question stated ' + ansToping);
  for (var i = 0; i < favTopings.length; i++) {
    if (ansToping === favTopings[i]) {
      alert('Nice guess, ' + ansToping + ' makes a pizza great!' );
      guessTopping = -1;
      numCorrect.push (1);
      break;
    }
  }
  if (guessTopping > 0) {
    guessTopping--;
    alert('Guess again.' + guessTopping + ' guesses left.');
  }
  if (guessTopping === 0) {
    alert('Out of guesses.');
  }
}

alert('You got ' + numCorrect.length + ' answers correct. Thank you for playing!  I hope you learned something.');
