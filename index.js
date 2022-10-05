var readlineSync = require("readline-sync");

const questions = [
  {
    question: "Where do I live? ",
    answer: "jaipur",
  },

  {
    question: "Who is my favourite superhero? ",
    answer: "ironman",
  },

  {
    question: "When did I complete my M. Tech degree ?",
    answer: "2021",
  },
  {
  question: 'Where is my college located ?',
  answer:'Jaipur'
  },
  {
  question: 'When did I complete my B. Tech degree ?',
  answer:'2020'
  }
];

var score = 0;

var scores = {
  currentScore: score,
  HighestScore: {
    name: "Tejan",
    score: 3,
  },
};

console.log(
  "Hey! there. This is Tejan Singh and I welcome you to my Quiz App! \nHere you will answer questions related to me. \n"
);

const quiz = (question, correctAnswer) => {
  const userAnswer = readlineSync.question(`${question} \n`);
  if (userAnswer === correctAnswer) {
    console.log("You are right!");
    score = score + 1;
    scores.currentScore = score;
    console.log(`Current score is ${score} \n`);
  } else {
    console.log("You are wrong!");
    console.log(`Current score is ${score} \n`);
  }
};

for (var i = 0; i < questions.length; i++) {
  console.log(`Question no. ${i + 1}`);
  quiz(questions[i].question, questions[i].answer);
}

console.log(`Final score is ${scores.currentScore}`);
console.log(
  `Highest score is ${scores.HighestScore.score} created by ${scores.HighestScore.name} \n`
);

if (scores.currentScore >= scores.HighestScore.score) {
  console.log(
    "Congrats! You have beaten the highest score. Please share your screenshot to update the highest score"
  );
}
