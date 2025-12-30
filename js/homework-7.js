// Level 1
// 1. Создать массив чисел от 1 до 10. Отфильтровать, чтобы получить массив чисел начиная с 5

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbersArray = numbersArray.slice(4);

// 2. Создать массив строк определенной темы (фильмы, книги) и проверить, есть ли в массиве что-то определенное.

const tuesdayNightMovies = ['The Damned', 'George A. Romeros Resident Evil', 'Den of Thieves 2: Pantera', 'Survive', 'Get Away', 'Look Into My Eyes'];
const hasSurviveMovieOnTuesday = tuesdayNightMovies.includes('Survive');

// 3. Написать функцию, которая принимает массив и реверсировать его. Два вышеуказанных массива перевернуть.

function reverseArray(array) {
	array.reverse();
};

reverseArray(tuesdayNightMovies);
reverseArray(numbersArray);


