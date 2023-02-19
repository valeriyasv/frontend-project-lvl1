import gameInit from "../index.js";
import { generationRandomNum } from "../utils.js";

const nameTask = 'What is the result of the expression?';

const gameCalc = () => {
    const operation = ['+', '-', '*'];
    const randomOperat = operation[Math.floor(Math.random() * 2)];
    const numOne = generationRandomNum();
    const numTwo = generationRandomNum();
    const task = `${numOne}${randomOperat}${numTwo}`
    let resultTask;
    
    if (randomOperat === '+') {
        resultTask = numOne + numTwo;
    } else if (randomOperat === '-') {
        resultTask = numOne - numTwo;
    } else if (randomOperat === '*') {
        resultTask = numOne * numTwo;
    }
    return [task, `${resultTask}`];
}

export default () => gameInit(nameTask, gameCalc);