'use strict';

alert ('Let\'s play a guessing game about me!');

var cityBorn = prompt('Was I born in Washington?') .toLowerCase();

if (cityBorn === 'yes' || cityBorn === 'y') {
  alert ('Nope! I was born in Denver.');
  console.log('City question user stated ' + cityBorn);

} else if (cityBorn === 'no' || cityBorn === 'n') {
  alert ('Indeed, I was born in Denver.');
  console.log('City question user stated ' + cityBorn);

} else {
  alert ('Please answer with "yes" or "no"');
  console.log('City question user stated ' + cityBorn);
}

var married = prompt('Am I married?') .toLowerCase();

if (married === 'yes' || married === 'y') {
  alert ('Correct!  Happily, since 2005!');
  console.log('Married question user stated ' + married);

} else if (married === 'no' || married === 'n') {
  alert ('In fact I am, since 2005.');
  console.log('Married question user stated ' + married);

} else {
  alert ('Please answer with "yes" or "no"');
  console.log('Married question user stated ' + married);
}


var army = prompt('Was I ever in the Army?') .toLowerCase();

if (army === 'yes' || army === 'y') {
  alert ('Yep!  I joined in 2006.');
  console.log('Army question user stated ' + army);

} else if (army === 'no' || army === 'n') {
  alert ('Wrong, I joined the Army in 2006.');
  console.log('Army question user stated ' + army);

} else {
  alert ('Please answer with "yes" or "no"');
  console.log('Army question user stated ' + army);
}

var degree = prompt('Do I have a degree?') .toLowerCase();

if (degree === 'yes' || degree === 'y') {
  alert ('Sadly, no.  I haven\'t attended much school.');
  console.log('Degree question user stated ' + degree);

} else if (degree === 'no' || degree === 'n') {
  alert ('Correct.  I havne\'t attended much school.');
  console.log('Degree question user stated ' + degree);

} else {
  alert ('Please answer with "yes" or "no"');
  console.log('Degree question user stated ' + degree);
}

var codeFellows = prompt('Is Code Fellows an awesome school?') .toLowerCase();

if (codeFellows === 'yes' || codeFellows === 'y') {
  alert ('You bet it is!  Let\'s learn some code!');
  console.log('CodeFellows question user stated ' + codeFellows);

} else if (codeFellows === 'no' || codeFellows === 'n') {
  alert ('What are you smoking? Code Fellows is the greatest!');
  console.log('CodeFellows question user stated ' + codeFellows);

} else {
  alert ('Please answer with "yes" or "no"');
  console.log('CodeFellows question user stated ' + codeFellows);
}

var pizza = prompt('Would I kill for some pizza?') .toLowerCase();

if (pizza === 'yes' || pizza === 'y') {
  alert ('Dude, no! Murder is illegal! But I really do want some pizza');
  console.log('Pizza question user stated ' + pizza);

} else if (pizza === 'no' || pizza === 'n') {
  alert ('Right, because murder is illegal, but I really do want some pizza.');
  console.log('Pizza question user stated ' + pizza);

} else {
  alert ('Please answer with "yes" or "no"');
  console.log('Pizza question user stated ' + pizza);
}











alert ('Thank you for playing!  I hope you learned something.');
