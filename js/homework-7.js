import { userComments } from './comments.js';

// Level 1
// 1. Создать массив чисел от 1 до 10. Отфильтровать, чтобы получить массив чисел начиная с 5

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersArrayFromFive = numbersArray.filter((item) => item >= 5);

// 2. Создать массив строк определенной темы (фильмы, книги) и проверить, есть ли в массиве что-то определенное.

const tuesdayNightMovies = ['The Damned', 'George A. Romeros Resident Evil', 'Den of Thieves 2: Pantera', 'Survive', 'Get Away', 'Look Into My Eyes'];
const hasSurviveMovie = tuesdayNightMovies.includes('Survive');

// 3. Написать функцию, которая принимает массив и реверсировать его. Два вышеуказанных массива перевернуть.

function reverseArray(array) {
	array.reverse();
};

reverseArray(tuesdayNightMovies);
reverseArray(numbersArray);

// Level 2
// 4. Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива (https://jsonplaceholder.typicode.com/comments).
// переменная должна быть названа по смыслу.

// 6. Сделать константу экспортируемой, добавив перед "const" ключевое слово "export". Таким образом мы сможем внедрить переменную из comments.js в homework-7.js и работать с ней.
// Когда мы введем название переменной, нам предложит импортировать ее - так и делаем.

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const userCommentsByDotCom = userComments.filter(userComment => userComment.email.includes('.com'));

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

userComments.map(userComment => userComment.id <= 5 ? userComment.postId = 2 : userComment.postId = 1);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const users = userComments.map(userComment => ({
	id: userComment.id,
	name: userComment.name,
}));

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

userComments.map(userComment => ({
	...userComment,
	isInvalid: userComment.body.length > 180,
}));

// Уровень 3:
// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const userEmails = userComments.reduce((acc, userComment,) => {
	acc.push(userComment.email);

	return acc;
}, []);

const userEmails2 = userComments.map(userComment => userComment.email);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const stringedUserEmails = userEmails.toString();
