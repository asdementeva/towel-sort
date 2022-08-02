
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix) {
    for (let i = 0; i < matrix.length; i++) {
    i % 2 ?  result = result.concat(matrix[i].reverse()) : result = result.concat(matrix[i]);
    }   
  }

  return result
}
