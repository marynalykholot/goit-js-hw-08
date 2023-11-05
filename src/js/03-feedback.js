
// Відстежуй на формі подію input, і щоразу записуй у локальне
//  сховище об'єкт з полями email і message,
//   у яких зберігай поточні значення полів форми. 
//   Нехай ключем для сховища буде рядок "feedback-form-state".
// // Під час завантаження сторінки перевіряй стан сховища,
//  і якщо там є збережені дані, заповнюй ними поля форми. 
//  В іншому випадку поля повинні бути порожніми.
// // Під час сабміту форми очищуй сховище і поля форми,
//  а також виводь у консоль об'єкт з полями email,
//   message та їхніми поточними значеннями.
// // Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
//  Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
// імпорт лодаш
import throttle  from "lodash.throttle";

// Отримуємо посилання на форму та її елементи
const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

// Функція, яка виконується при події input
const handleInput = throttle(() => {
  // Отримуємо значення полів форми
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  // Записуємо значення в локальне сховище
  const feedbackData = { email: emailValue, message: messageValue };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}, 500); // Оновлюємо сховище не частіше, ніж раз на 500 мілісекунд

// Функція, яка заповнює поля форми зі значеннями з локального сховища
const populateFormFields = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }
};

// Перевіряємо стан сховища під час завантаження сторінки
window.addEventListener('DOMContentLoaded', populateFormFields);

// Функція, яка виконується при сабміті форми
const handleSubmit = event => {
  event.preventDefault();

  // Отримуємо значення полів форми
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  // Очищуємо сховище та поля форми
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  // Виводимо об'єкт у консоль
  const feedbackData = { email: emailValue, message: messageValue };
  console.log(feedbackData);
};

// Додаємо обробник події input до форми
form.addEventListener('input', handleInput);

// Додаємо обробник події submit до форми
form.addEventListener('submit', handleSubmit);


