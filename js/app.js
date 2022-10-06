'use strict';

alert('Hello');
let username = prompt('What is your name?');
console.log(username);
alert('Hello ' + username + '. Welcome to my about me page!');

alert(
  'Lets play a guessing game about me, using yes or no responses. Ok? Perfect!'
);

/*Question 1*/
function quizQuestion1() {
  let question1 = prompt('Do I like Star Wars');
  if (question1 === 'yes') {
    alert('Darn tootin I do!');
  } else {
    alert('Incorrect! I find your lack of faith disturbing!');
  }
}
quizQuestion1();

/*Question 2*/
function quizQuestion2() {
  let question2 = prompt('Do I love Pizza');
  if (question2 === 'yes') {
    alert('That is correct! I must have it!');
  } else {
    alert('Wrong! I need the cheesy pie!');
  }
}
quizQuestion2();

/*Question 3*/
function quizQuestion3() {
  let question3 = prompt('Am I handsome?');
  if (question3 === 'yes') {
    alert('I have been told I resemble Denzel Washington...');
  } else {
    alert('Beauty is in the eye of the beholder...and youre mean...');
  }
}
quizQuestion3();

/*Question 4*/
function quizQuestion4() {
  let question4 = prompt('Do I like Architecture?');
  if (question4 === 'yes') {
    alert('Correct!');
  } else {
    alert('Sorry, I love the structures');
  }
}
quizQuestion4();

/*Question 5*/
function quizQuestion5() {
  let question5 = prompt('Am I a millionaire?');
  if (question5 === 'yes') {
    alert('Not yet, but I will be');
  } else {
    alert('Correct. But I question your faith in me...');
  }
}
quizQuestion5();

alert(
  'Thank your for playing my game ' +
    username +
    '. You may find out more about me here on my site. Come on in!'
);
