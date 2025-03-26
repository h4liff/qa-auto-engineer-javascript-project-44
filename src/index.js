import readlineSync from 'readline-sync';
import greeting from './cli.js';

const username = greeting();

const gameEngine = (rules, getQuestionAndAnswer) => {
  const roundsCount = 3;
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default gameEngine;
