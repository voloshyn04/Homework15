function calculateAverage(arr) {
    let sum = 0;
    let count = 0;

    for (const element of arr) {
        if (typeof element === 'number' && !isNaN(element)) {
            sum += element;
            count++;
        }
    }

    if (count === 0) {
        return 0; // Якщо немає числових елементів, повертаємо 0
    }

    return sum / count;
}

const array = [1, 'Privit', 2.4, 9, 'Anton',6 , 7];
console.log(calculateAverage(array));

