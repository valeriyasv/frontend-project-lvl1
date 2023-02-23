import readlineSync from 'readline-sync';


const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(userName);
    console.log(`Hello,${userName}!`);
}

export default greeting;