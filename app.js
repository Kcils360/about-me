'use strict';
alert ('Let\'s play a guessing game about me!');
var cityBorn = prompt("Was I born in Washington?") .toLowerCase();
  if (cityBorn == 'yes' || cityBorn == 'y') {
    alert ("Nope! I was born in Denver.");
    console.log('City question user stated ' + cityBorn);
  } else if (cityBorn == 'no' || cityBorn == 'n') {
    alert ('Indeed, I was born in Denver.');
  } else {
    alert ('Please answer with \'yes\' or \'no\'');
  }
