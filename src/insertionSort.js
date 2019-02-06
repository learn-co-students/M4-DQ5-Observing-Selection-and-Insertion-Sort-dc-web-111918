function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (var i=0; i < arr.length; i++){
    let value = arr[i]
    for (var j = i - 1; j > -1 && arr[j] > value; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = value
  }
  return arr
}
