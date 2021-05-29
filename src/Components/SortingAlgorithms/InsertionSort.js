const insertionSort = (array, n) => {
  const arr = [...array];
  const animation = [];
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    animation.push("changeColor", i, i, "orange");

    while (j >= 0 && arr[j] > key) {
      animation.push("changeColor", j, j + 1, "orange");
      arr[j + 1] = arr[j];
      animation.push("swap", j, j + 1);
      animation.push("changeColor", j, j + 1, "black");
      j = j - 1;
    }
    animation.push("changeColor", i, i, "orange");
    arr[j + 1] = key;
  }
  console.log(animation);
  return [animation, arr];
};

export default insertionSort;
