#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greeting = () => {
        console.log('Welcome to the Brain Games!');
        const userName = readlineSync.question('May I have your name? ');
        console.log(`Hello,${userName}!`);
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let i = 1;

    while (i <= 3) {
        const randNum = Math.floor(Math.random() * 100);
        
        console.log(`Question: ${randNum}`);
        
        const userAnsw = readlineSync.question('Your answer: ');

        if ((randNum % 2 === 0 && userAnsw === 'yes') || (randNum % 2 !== 0 && userAnsw === 'no')) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${(userAnsw === 'yes') ? 'no' : 'yes'}'.Let's try again, ${userName}!`);
            return;
        }
        i += 1;
    }
    console.log(`Congratulations, ${userName}!`);
}
    

greeting();
