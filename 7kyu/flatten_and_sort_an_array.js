// 1st approach
const flattenAndSort = (array) => array.flat().sort((a,b) => a - b);


console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
console.log(flattenAndSort([[], [1]]));
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));