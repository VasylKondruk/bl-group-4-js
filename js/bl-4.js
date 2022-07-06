/**
 * =======================================================
 */

// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
//  Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при авторизації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.

// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

// const countries = [
//   'Ukraine',
//   'Poland',
//   'Croatia',
//   'Montenegro',
//   'France',
//   'USA',
// ];

// const countriesPrice = [100, 200, 300, 400, 500, 600];

// let userNameRegistration = prompt("Ваше ім'я");
// let userPassRegistration = prompt('password');

// let userName = '';
// let userPass = '';

// do {
//   userName = prompt("Ваше ім'я при реєстрації");
//   userPass = prompt('password при реєстрації');
// } while (
//   userName !== userNameRegistration ||
//   userPass !== userPassRegistration
// );

// console.log('Ваш логін та пароль успішний');

// let maxPrice = prompt('Яку суму готові витратити на тур?');

// if (maxPrice >= 100 && maxPrice < 200) {
//   alert(`Країна в яку ви можете поїхати ${countries[0]}`);
// } else if (maxPrice >= 200 && maxPrice < 300) {
//   alert(`Країни в які ви можете поїхати ${countries.slice(0, 2)}`);
// } else if (maxPrice >= 300 && maxPrice < 400) {
//   alert(`Країни в які ви можете поїхати ${countries.slice(0, 3)}`);
// } else if (maxPrice >= 400 && maxPrice < 500) {
//   alert(`Країни в які ви можете поїхати ${countries.slice(0, 4)}`);
// } else if (maxPrice >= 500 && maxPrice < 600) {
//   alert(`Країни в які ви можете поїхати ${countries.slice(0, 5)}`);
// } else if (maxPrice >= 600) {
//   alert(`Країни в які ви можете поїхати ${countries}`);
// } else {
//   alert('У вас недостатньо коштів на тур');
// }

// let userCountry = prompt('Вкажіть країну в яку хочете поїхати');
// let userCredits;

// for (let i = 0; i < countries.length; i += 1) {
//   if (userCountry === countries[i]) {
//     userCredits = maxPrice - countriesPrice[i];
//   }
// }

// alert(`Тур оплачений, на вашому рахунку залишилось ${userCredits}$`);

/**
 * ==================================================================
 */
// Реалізуйте Result
// Expect: Result = ['a', 'b', 'c', 0, 1, 2, 3];

// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;

// const resB = b[1];

// console.log(...b.splice(1));

// const result = [...a, c, b[0], ...b[1]];

// console.log(result);

/**
 * ==================================================================
 */
// Реалізуйте Result
// Expect: Result = ["a", "b", "c", "a", "b", "c", "g", "h"];

// const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// const arr1 = a.slice(-2);
// console.log(arr1);
// const result = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];
// const result = a.splice(3, 3, ...a.slice(0, 3));
// console.log(result);

/**
 * =================================================================
 */
// Реалізуйте функцію, яка розгладить масив:
// Expect: Result = [1, 2, 3, 4, 5, 6, 7];

const arr = [1, 2, [3, 4], [5, 6], 7];

let result = [];

for (const ar of arr) {
  if (Array.isArray(ar)) {
    result.push(...ar);
  } else {
    result.push(ar);
  }
}

// console.log(result);

/**
 * =================================================================
 */

// Реалізуй функцію, яка приймає рядки або числа і повертає масив з протилежним типом даних:

function convert(...args) {
  const newArray = [...args];

  const result = [];

  for (const arg of newArray) {
    // if (typeof arg === 'number') {
    //   result.push(String(arg));
    // } else {
    //   result.push(Number(arg));
    // }

    typeof arg === 'number'
      ? result.push(String(arg))
      : result.push(Number(arg));
  }

  return result;
}

// console.log(convert('1', 2, 3, '4'));
// console.log(convert(1, '2', '3', 4));

// ================================================
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// const foo = id => {
//   return users.find(user => id === user.id);
// };

// console.log(foo(3));

// =================================================
// 2. Виведи в консоль стрічку слідуючого типу: "Имя - позиция в массиве Х и сам массив"
//
const robots = ['Bender', 'Awesom-O', 'Johnny 5'];

// robots.forEach((robot, index, array) =>
// console.log(`${robot}, ${index}`, array),
// );

// ================================================
// 3. Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// // Але рахуватись мають лише позитивні числа!!!

const positiveSum = arr => {
  return arr.reduce((acc, element) => {
    if (element > 0) {
      return acc + element;
    }
    return acc;
  });
};

// console.log(positiveSum([2, 4, 6, 8])); // 20
// console.log(positiveSum([0, -3, 5, 7]));

// ====================================================
// 4. Відсортуй обєкти по збільшеню та зменшеню score
//
// const users = [
//   { name: 'Victor', score: 20 },
//   { name: 'Mario', score: 10 },
//   { name: 'Tatiana', score: 30 },
// ];

// function usersSortedByScoreDesc(users) {
//   return [...users].slice().sort((a, b) => a.score - b.score);
// }

// function usersSortedByScoreAsc(users) {
//   return [...users].slice().sort((a, b) => b.score - a.score);
// }

// console.log(usersSortedByScoreDesc(users)); // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]
// console.log(usersSortedByScoreAsc(users)); // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]
// // console.log(users.slice());
// console.log(users);

// ==========================================================
//  Напиши ф-цію, яка фільтрує масив та повертає елементи, окрім того, що був переданий в дану функцію в якості аргумента.

// const animals = ['pigs', 'goats', 'sheep'];

// function foo(name) {
//   return animals.filter(animal => animal !== name);
// }

// console.log(foo('pigs')); // ["goats", "sheep"]
