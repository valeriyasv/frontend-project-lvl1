import gameInit from "../index.js";
import { generationRandomNum } from "../utils.js";


const isNumberPrime = (num) => {
    if (num <= 1) {
        return 'no';
    }
    for (let d = 2; d < Math.sqrt(num); d += 1) {
        if (num % d === 0) {
            return 'no';
        }
    }
    return 'yes';
};

const nameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
    const task =  generationRandomNum();
    const resultTask = isNumberPrime(task);
    return [task, resultTask];
}

export default () => gameInit(nameTask, gamePrime);
