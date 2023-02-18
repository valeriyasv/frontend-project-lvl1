import gameInit from "../index.js";
import { generationRandomNum } from "../utils.js";

const nameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {

    const task =  generationRandomNum();
    let resultTask;

    if (task % 2 === 0) {
        resultTask = 'yes'
    } else {
        resultTask = 'no'
    }

    return [task, resultTask];
}
    
export default () => gameInit(nameTask, gameEven);
