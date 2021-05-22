const bubbleSort = (array, arraySize) => {
  let arr = [...array];
  let animation = [];
  let isSwapped = false;

  for (let i = 0; i < arraySize - 1; i++) {
    isSwapped = false;
    for (let j = 0; j < arraySize - i - 1; j++) {
      animation.push("changeColor", j, j + 1, "orange");
      if (arr[j] > arr[j + 1]) {
        animation.push("swap", j, j + 1);
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
      animation.push("changeColor", j, j + 1, "black");
    }
    if (!isSwapped) break;
  }
  return [animation, arr];
};

export default bubbleSort;
