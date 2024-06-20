function createArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100)); // Випадкові числа від 0 до 99
    }
    return array;
}

function findMaxEvenValue(array){
    let maxEvenValue = null;
    let maxEvenIndex = -1;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && (maxEvenValue === null || array[i] > maxEvenValue)) {
            maxEvenValue = array[i];
            maxEvenIndex = i;
        }
    }
    return {
        value: maxEvenValue,
        index: maxEvenIndex
    }
}

function findMinEventIndex(array){
    let minEvenIndexValue = array[0];
    let minEvenIndex = 0;
    
    for (let i = 0; i < array.length; i += 2) {
        if (array[i] < minEvenIndexValue) {
            minEvenIndexValue = array[i];
            minEvenIndex = i;
        }
    }
    return {
        value: minEvenIndexValue,
        index: minEvenIndex
    }
}

function changeElementArray(maxNum, minNum, array){
    array[maxNum.index] = minNum.value;
    array[minNum.index] = maxNum.value;
    return array;
}

let size = prompt("Введіть кількість елементів у масиві:");
size = parseInt(size, 10);

let inputArray = createArray(size);
console.log("Вхідний масив:", inputArray);

let maxNumber = findMaxEvenValue(inputArray);
let minNumber = findMinEventIndex(inputArray);

console.log(maxNumber);
console.log(minNumber);

let outputArray = changeElementArray(maxNumber, minNumber, inputArray);
console.log("Вихідний масив:", outputArray);

///////////////////////////////////////////////////////////////////////

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        // Зрушення елементів, більших за key, на одну позицію вправо
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

let sortedArray = insertionSort(outputArray);
console.log("Відсортований масив:", sortedArray);