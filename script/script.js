'use strict';

function guessNumFunc() {
  let initialNum = parseInt(Math.random() * 100);
  
  function checkAnswer(){
    let answer = prompt('Угадай число от 1 до 100');

    if (isNaN(answer)){
      alert('Введи число!');

    } else if (answer === null) {
      alert('Игра окончена');

    } else if (+answer === initialNum){
      alert('Поздравляю, Вы угадали!');

    } else if (+answer > initialNum){
      answer = +prompt('Загаданное число меньше...');

    } else if (+answer < initialNum){
      answer = +prompt('Загаданное число больше...');
    }

  }
  console.log(initialNum);
  return checkAnswer();
}

const guessNum = guessNumFunc();
guessNum();