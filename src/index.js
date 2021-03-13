// You should implement your task here.
module.exports = function towelSort(matrix) {
    let result = []
    if (!matrix) {
        return result;
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i])
        if (i % 2 == 0) {
            result.push(matrix[i])
        } else {
            result.push(matrix[i].reverse())
        }
    }
    return result.flat(1);
}
