'use strict';
const books = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    headers = document.querySelectorAll('h2 a'),
    adv = document.querySelector('.adv'),
    book2Chap = books[0].querySelectorAll('li'),
    book5Chap = books[5].querySelectorAll('li'),
    book6Chap = books[2].querySelectorAll('li');

// Восстановить порядок книг.
books[0].insertAdjacentElement('beforebegin', books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

// Заменить картинку заднего фона на другую из папки image
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
headers[4].textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
adv.remove();

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
book2Chap[3].after(book2Chap[6]);
book2Chap[6].after(book2Chap[8]);
book2Chap[9].after(book2Chap[2]);

book5Chap[1].after(book5Chap[9]);
book5Chap[4].after(book5Chap[2]);
book5Chap[7].after(book5Chap[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const li = document.createElement('li');
li.textContent = 'Глава 8: За пределами ES6';
book6Chap[8].insertAdjacentElement('afterend', li);
