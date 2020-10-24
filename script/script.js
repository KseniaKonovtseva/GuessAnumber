'use strict';

function guessNumFunc() {
  let initialNum = parseInt(Math.random() * 100);
  
  function checkAnswer(answer){
    answer = prompt('Угадай число от 1 до 100');

    if (isNaN(answer)){
      alert('Введи число!');
      checkAnswer();
    } 
    
    if (answer === null) {
      return alert('Игра окончена');
    }
    
    
    if (+answer === initialNum){
      return alert('Поздравляю, Вы угадали!');

    } else if (+answer > initialNum){
      alert('Загаданное число меньше');
      //answer = +prompt('Загаданное число меньше...');
      checkAnswer(answer);

    } else if (+answer < initialNum){
      alert('Загаданное число больше')
      //answer = +prompt('Загаданное число больше...');
      checkAnswer(answer);
    }

  }
  console.log(initialNum);
  return checkAnswer();
}

const guessNum = guessNumFunc();
guessNum();