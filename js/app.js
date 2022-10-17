'use strict';


alert('Hello');
let username = prompt('What is your name?');
console.log(username);
alert('Hello ' + username + '. Welcome to my about me page!');

let score = -1;
function guessGame() {
  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();
}


function q1() {
  alert('Lets play a guessing game about me, using yes or no responses. Ok? Perfect!');
  let question1 = prompt('Do I like Star Wars?');
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
    alert('Darn tootin I do!');
    score ++;
  } else if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {
    alert('Incorrect! I find your lack of faith disturbing!');
  } else {
    console.log('That wasnt a yes or no response.');
    alert('That wasnt a yes or no response.');
  }
}

function q2() {
  let question2 = prompt('Do I love pizza?');
  if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
    alert('Got it!');
    score ++;
  } else if (question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
    alert('Nope!');
  } else {
    console.log('That wasnt a yes or no response.');
    alert('That wasnt a yes or no response.');
  }
}

function q3() {
  let question3 = prompt('Am I handsome?');
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
    alert('Thnks! I like to think so!');
    score ++;
  } else if (question3.toLowerCase() === 'no' || question3.toLowerCase() === 'n') {
    alert('Wow! You are mean!');
  } else {
    console.log('That wasnt a yes or no response.');
    alert('That wasnt a yes or no response.');
  }
}

function q4() {
  let question4 = prompt('Did I study Architecture?');
  if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
    alert('I sure did!!');
    score ++;
  } else if (question4.toLowerCase() === 'no' || question4.toLowerCase() === 'n') {
    alert('Wrong!');
  } else {
    console.log('That wasnt a yes or no response.');
    alert('That wasnt a yes or no response.');
  }
}

function q5() {
  let question5 = prompt('Do I have a dog?');
  if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
    alert('Yes I have a four legged friend!');
    score ++;
  } else if (question5.toLowerCase()
   === 'no' || question5.toLowerCase() === 'n') {
    alert('Nope! I definately have a dog!');
  } else {
    console.log('That wasnt a yes or no response.');
    alert('That wasnt a yes or no response.');
  }
}

//Q6
function q6() {
  alert('Were not answering with yes or no anymore, ok.');
  let attempts = 4;
  let numGuess = 13;

  let question6 = parseInt(prompt('What is my lucky number?'));
  while (question6 !== numGuess && attempts > 1) {
    if (question6 < numGuess) {
      attempts -= 1;
      alert(
        `Too low. Guess higher! You have ${attempts} attempts left.`
      );
    } else if (question6 > numGuess) {
      attempts -= 1;
      alert(
        `Thats too high. Go lower! You have ${attempts} attempts left.`
      );
    } else {
      attempts -= 1;
      alert(
        `Thats not a number. Guess a number and try again. You have ${attempts} attempts left.`
      );
    }
    question6 = parseInt(prompt('Whats my lucky number?'));
  }

  if (question6 === numGuess) {
    score ++;
    alert('You got it!');
  } else {
    alert(`Sorry, youre out of attempts. I was thinking of the number ${numGuess}.`);
  }
}

function q7() {
  //Question 7
  let animeAtt = 6;
  let favorite = false;
  let favAnime = [
    'Cowboy Bebop',
    'Full Metal Alchemist Brotherhood',
    'Dragonball Z',
    'YuYu Hakusho',
    'Death Note',
    'Attack on Titan',
    'My Hero Academia',
    'Samurai Champloo',
    'Tri Gun',
    'Naruto Shippuden'
  ];

  let question7 = prompt('What is one of my favorite anime?');
  while (animeAtt > 1 && favorite === false) {
    animeAtt -= 1;
    for (let i = 0; i < favAnime.length; i++) {
      if (question7.toLowerCase() === favAnime[i].toLowerCase()) {
        alert(`Youre amazing! ${question7} is one of my favorite anime!`);
        score += 1;
        console.log(`Youre amazing! ${question7} is my favorite anime!`);
        favAnime = true;
      }
    }
    if (favAnime === false && animeAtt > 0) {
      alert(
        `Thats not it! Try again. You have ${animeAtt} attempts left.`
      );
    }
    if (animeAtt === 0) {
      alert('Sorry, Youre out of attempts.');
    }
  }
  if (favAnime === true) {
    score ++;
  }
  alert(`Thank you for playing my game ${username}. You answered ${score}/7 correct! You may find out more about me here on my site. Come on in!`);
}

guessGame();
