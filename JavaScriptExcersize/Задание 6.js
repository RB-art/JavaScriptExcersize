//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
const allEqual = arr => arr.every(val => val === arr[0]);
const result = allEqual([ 2, 5, 5, 5, 5])
console.log(result)
