import readlineSync from 'readline-sync';

const gameInit = (gameQuestions, userAnswer) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello,${userName}!`);
    console.log(gameQuestions);

    let i = 1;

    while (i <= 3) {

        const [task, resultTask] = userAnswer();
        
        console.log(`Question: ${task}`);
        
        const userAnsw = readlineSync.question('Your answer: ');

        if (resultTask === userAnsw) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was ${resultTask}. Let's try again, ${userName}!`);
            return;
        }
        i += 1;
    }
    console.log(`Congratulations, ${userName}!`);
}

export default gameInit;