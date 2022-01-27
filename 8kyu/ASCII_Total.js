const uniTotal = (string) => {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(string[i]);
    console.log("sum: ", sum);
  }
}

console.log(uniTotal("aaa"));