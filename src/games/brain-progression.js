import gameInit from "../index.js";
import { generationRandomNum } from "../utils.js";

const nameTask = 'What number is missing in the progression?';

const gameGenerate = () => {
    const lengthArr = Math.floor(Math.random() * 10);
    const firstItem = Math.floor(Math.random() * lengthArr);
    const result = [firstItem];
    const step = Math.floor(Math.random() * 7);
    const hide = ' .. ';
    for (let i = 0; i < lengthArr; i++) {
        result.push(result[i] + step);
    }
    const hideIndex = Math.floor(Math.random() * lengthArr);
    result[hideIndex] = hide;
    const task = result.join(', ');

    const resultTask = (step * hideIndex) + firstItem;

    return [task, `${resultTask}`];
}
export default () => gameInit(nameTask, gameGenerate);

