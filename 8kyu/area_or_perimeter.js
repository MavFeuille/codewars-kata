const areaOrPerimeter = (length, width) => {
  return length === width ? length * width : (length + width) * 2;
}

console.log(areaOrPerimeter(2, 4));
