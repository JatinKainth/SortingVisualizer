const selectionSort = (array, n) => {
  let inputArr = [...array];
  let animation = [];
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      animation.push("changeColor", j, j, "orange");
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
      animation.push("changeColor", j, j, "black");
    }
    if (min != i) {
      animation.push("swap", i, min);
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  console.log(animation);
  return [animation, inputArr];
};

export default selectionSort;
