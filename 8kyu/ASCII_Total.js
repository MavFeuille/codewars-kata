const uniTotal = (string) => {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(string[i]);
  }
  return sum;
}

console.log(uniTotal("aaa"));
console.log(uniTotal("Mary Had A Little Lamb"));