const mergeSort = (array, arraySize) => {
  let arr = [...array];
  let animation = [];

  const mergeSortedArray = (low, mid, high) => {
    let leftArr = [];
    let rightArr = [];
    for (let i=low; i<=mid; i++) leftArr.push([arr[i], i]);
    for (let i=mid+1; i<=high; i++) rightArr.push([arr[i], i]);

    let i=0, j=0, k=low;
    let n = leftArr.length, m = rightArr.length;

    while (i<n && j<m) {
      animation.push("changeColor", leftArr[i][1], rightArr[j][1], "orange");
      if (leftArr[i][0]<rightArr[j][0]) {
        animation.push("change", k, leftArr[i][0]);
        animation.push("changeColor", leftArr[i][1], rightArr[j][1], "black");
        animation.push("changeColor", k, k, "black");
        arr[k++] = leftArr[i++][0];
      } else {
        animation.push("change", k, rightArr[j][0]);
        animation.push("changeColor", leftArr[i][1], rightArr[j][1], "black");
        animation.push("changeColor", k, k, "black");
        arr[k++] = rightArr[j++][0];
      }
    }

    while (i<n) {
        animation.push("change", k, leftArr[i][0]);
        animation.push("changeColor", k, k, "black");
      arr[k++] = leftArr[i++][0];
    }

    while (j<m) {
        animation.push("change", k, rightArr[j][0]);
        animation.push("changeColor", k, k, "black");
      arr[k++] = rightArr[j++][0];
    }
  }

  const mergeSortHelper = (low, high) => {
    if (low == high) return;

    let mid = Math.floor((low + high)/2);
    mergeSortHelper(low, mid);
    mergeSortHelper(mid+1, high);
    mergeSortedArray(low, mid, high);
  }

  mergeSortHelper(0, arraySize-1);
  console.log(arr);
  console.log(animation);
  return [animation, arr];
}

export default mergeSort;