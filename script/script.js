'use strict';

function guessNumFunc() {
  let initialNum = parseInt(Math.random() * 100);
  

  function checkAnswer(){
    const answer = prompt('Угадай число от 1 до 100');

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

    } else if (+answer < initialNum){
      alert('Загаданное число больше');
    }

    return checkAnswer();

  }

  console.log(initialNum);
  return checkAnswer();
}

guessNumFunc();