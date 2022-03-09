const reverses = (string) => {
  let inputArray = string.split(" ");
  // console.log("🚀 ~ file: reverse_a_string_with_respect_to_spaces.js ~ line 3 ~ reverses ~ inputArray", inputArray)
  let result = new Array(inputArray.length);
  console.log("🚀 ~ file: reverse_a_string_with_respect_to_spaces.js ~ line 4 ~ reverses ~ result", result)
  
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === " ") {
      result[i] = " ";
      console.log("result.length ~ Line10 : ", result.length);
    }
  }

  let j = result.length - 1;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== " ") {
      if (result[j] == " ") {
        result[j] = inputArray[i];
        j--;
      }
    }
  }
  console.log(result.join(""));
}

console.log(reverses("internship at g for g"));