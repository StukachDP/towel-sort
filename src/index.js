// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix) === false || matrix.length === 0) {
        return [];
    }
    if (matrix.length === 1) {
        return matrix[0];
    }
    let resultArray = [];
    for (let index = 0; index < matrix.length; index++) {
        element = matrix[index];
        if ((index + 2) % 2 === 0) {
            for (let indexElement = 0; indexElement < element.length; indexElement++) {
                resultArray.push(element[indexElement]);
            }
        } else {
            for (let indexElement = element.length - 1; indexElement >= 0; indexElement--) {
                resultArray.push(element[indexElement]);

            }
        }

    }
    return resultArray;
}