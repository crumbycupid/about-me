'use strict';

alert('Hello');
let username=prompt('What is your name?');
console.log(username);
alert('Hello ' + username +'. Welcome to my about me page!');

alert('Lets play a guessing game about me, using yes or no responses. Ok? Perfect!');

let question1=prompt('Do I like Star Wars');
if (question1 === 'yes') {
  alert('Darn tootin I do!');
} else {
  alert('Incorrect! I find your lack of faith disturbing!');
}

let question2=prompt('Do I love Pizza');
if (question2 === 'yes') {
  alert('That is correct! I must have it!');
} else {
  alert('Wrong! I need the cheesy pie!');
}

let question3=prompt('Am I handsome?');
if (question3 === 'yes') {
  alert('I have been told I resemble Denzel Washington...');
} else {
  alert('Beauty is in the eye of the beholder...and youre mean...');
}

let question4=prompt('Do I like Architecture?');
if (question4 === 'yes') {
  alert('Correct!');
} else {
  alert('Sorry, I love the structures');
}

let question5=prompt('Am I a millionaire?');
if (question5 === 'yes') {
  alert('Not yet, but I will be');
} else {
  alert('Correct. But I question your faith in me...');
}

alert('Thank your for playing my game ' + username+ '. You may find out more about me here on my site. Come on in!');
