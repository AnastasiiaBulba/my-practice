'use strict';

// Перевірка числа мінусове чи ні
let numbers = 15;

if (numbers < 0) {
  console.log('Negative numbers');
} else {
  console.log('Positive numbers');
}
// ------------------------------

// Довжина рядка
const lineNew = 'Welcome to Ukraine!';
console.log(lineNew.length);
// ------------------------------

// Останній символ
let symbolNew = 'Welcome to Ukraine!';
let endSymbol = symbolNew.length - 1;
console.log(symbolNew[endSymbol]);
// ------------------------------

// Парне не парне
let nam = 38;
if (nam % 2 === 0) {
  console.log('Парне число');
} else {
  console.log('Не парне число');
}
// ------------------------------

// Перевірка перших букв
function wordsAudit(words1, words2) {
  let words1Lower = words1.toLowerCase();
  let words2Lower = words2.toLowerCase();

  if (words1Lower[0] === words2Lower[0]) {
    return 'Співпадіння';
  } else {
    return 'Не співпадає';
  }
}
console.log(wordsAudit('Audit', 'autumn'));
console.log(wordsAudit('Audit', 'bautumn'));
// ------------------------------

// Остання буква зі слова
