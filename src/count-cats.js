module.exports = function countCats(matrix) {
  let rez = 0;
  for(let i of matrix) {
    for (let j of i) {
      if(j === "^^")
        rez++;
    }
  }
  return rez;
}