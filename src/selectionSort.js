function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let i 
  let j 
  let n = arr.length
  
  for(j=0; j < n-1; j++){
    let iMin = j
    for(i=j+1; i < n; i++) {
      if (arr[i] < arr[iMin]) {
        iMin = i
      }
    let temp = arr[j]
    arr[j] = arr[iMin]
    arr[iMin] = temp
    }
  }
}