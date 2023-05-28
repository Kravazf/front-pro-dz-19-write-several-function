// // Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let array = [1, "green", 25, 'banana', 3, 5, 8];

function searchForNumericElements(arr) {
  let numericalArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      numericalArray.push(arr[i]);
    }
  }

  return numericalArray;
}

let result = searchForNumericElements(array);
console.log(result); // Виведе: [1, 25, 3, 5, 8]

function calculateTheArithmeticMean(ArithmeticMeanArray) {  
  let sum = 0;

  for (let i = 0; i < ArithmeticMeanArray.length; i++) {
    sum += ArithmeticMeanArray[i];
  }

  let arithmeticMean = sum / ArithmeticMeanArray.length;
  return arithmeticMean;
}

let resultNumericElement = calculateTheArithmeticMean(result);
console.log(resultNumericElement);

// // Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// function doMath() {
//   let x = parseFloat(prompt(`Введіть 1-ше число`));
//   let znak = prompt(`Ведіть '+', '-', '*', '/', '%', '^' (ступінь) в залежності від того, яку операцію ви хочете виконати`);
//   let y = parseFloat(prompt(`Введіть 2-ге число`));
  
//   if (isNaN(x) || isNaN(y)) {
//     console.log('Введено неправильні числа. Будь ласка, спробуйте ще раз.');
//     return;
//   }

//   const validOperators = ['+', '-', '*', '/', '%', '^'];
//   if (!validOperators.includes(znak)) {
//     console.log('Введено неправильний оператор. Будь ласка, спробуйте ще раз.');
//     return;
//   }

//   let result = null;

//   switch (znak) {
//     case '+':
//       result = x + y;
//       break;
//     case '-':
//       result = x - y;
//       break;
//     case '*':
//       result = x * y;
//       break;
//     case '/':
//       if (y === 0) {
//         console.log('Ділення на нуль неможливе. Будь ласка, введіть інше число.');
//         return;
//       }
//       result = x / y;
//       break;
//     case "%":
//       if (y === 0) {
//         console.log('Ділення на нуль неможливе. Будь ласка, введіть інше число.');
//         return;
//       }
//       result = x % y;
//       break;
//     case '^':
//       result = Math.pow(x, y);
//       break;
//     default:
//       console.log('Невідомий оператор');
//       return 'Невідомий оператор';
//   }
  
//   console.log(`Результат ${x} ${znak} ${y} = ${result}`);
//   return result;
// }

// doMath();

// // Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// function fillingInDataArray () {
//   let lengthMainArray = parseInt(prompt('Вкажіть дожину основного масиву'));
//   let mainArray = [];

//   for (let i = 0; i < lengthMainArray; i++) {
//     let lengthNestedArray = parseInt(prompt(`Вкажіть дожину вкладеного масиву під номером ${i+1}`));
//     let nestedArray = [];

//     for (let j = 0; j < lengthNestedArray; j++) {
//       let elementNestedArray = (prompt(`Вкажіть вкажіть елемент масив під номером ${j+1}`));
//       nestedArray.push(elementNestedArray);
//     }
//     mainArray.push(nestedArray);
//   }

//   return mainArray;
// }

// let userDataArr = fillingInDataArray();
// console.log(userDataArr);

// // Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.


// function removeChars(str, charsToRemove) {
//   for (let i = 0; i < charsToRemove.length; i++) {
//     let char = charsToRemove[i];
//     str = str.split(char).join('');
//   }
//   return str;
// }

// let inputString = prompt('Введіть рядок:');
// let charsInput = prompt('Введіть символи для видалення:');
// let charsToRemove = charsInput.split('');

// let correctedString = removeChars(inputString, charsToRemove);
// console.log(correctedString);
