const flattenAndSort = (array) => {
  return array.flat().sort((a,b) => a - b);
}

console.log( flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))