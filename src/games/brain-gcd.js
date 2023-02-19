import gameInit from "../index.js";

const generateGcdNumber = (a, b) => {
    if (!b) {
      return a;
    }
    return generateGcdNumber(b, a % b);
  };

const nameTask = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
    const numOne = Math.floor(Math.random() * 100);
    const numTwo = Math.floor(Math.random() * 100);
    const task = `${numOne} ${numTwo}`;
    const resultTask = generateGcdNumber(numOne, numTwo);
    return [task, `${resultTask}`];
}

export default () => gameInit(nameTask, gameGcd);