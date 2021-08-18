function findStart(arr, search, start = 0, end = arr.length-1){
    let mid = Math.floor((start + end)/2);
    while(start <= end){
      if((mid === 0 || arr[mid - 1] < search)&& arr[mid] === search){
        return mid
      }else if(search > arr[mid]){
        return findStart(arr, search, mid + 1, end)
      } else {
        return findStart(arr, search, start, mid - 1)
      }
    }
    return -1
  }
  
  function findEnd(arr, search, start = 0, end = arr.length-1){
    let mid = Math.floor((start + end)/2);
    while(start <= end){
      if((mid === arr.length-1 || arr[mid + 1] > search) && arr[mid] === search){
        return mid
      }else if(arr[mid] <= search){
        return findEnd(arr, search, mid+1, end)
      }else{
        return findEnd(arr, search, start, mid-1)
      }
    }
  }
  
  function sortedFrequency(arr , search){
    let first = findStart(arr, search);
    if(first === -1) return first;
    let last = findEnd(arr, search);
    return last - first + 1;
  }

module.exports = sortedFrequency

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1