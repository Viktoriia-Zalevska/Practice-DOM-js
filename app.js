/*
 * На сторінці SmileCare є заголовок і список послуг клініки.
 * 1. Знайди заголовок за класом .heading і виведи його в консоль.
 * 2. Знайди всі послуги за класом .service і виведи колекцію в консоль.
 * 3. Виведи в консоль кількість послуг.
 */

// Твій код тут
const title = document.querySelector(".heading");
console.log(title);

const services = document.querySelectorAll(".service");
console.log(services);

console.log(services.length);
