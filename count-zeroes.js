function findFirst(arr, start=0, end=arr.length-1){
    let mid = Math.floor((start + end)/2)
    if(start <= end){
      if((arr[mid-1] === 1 || mid === 0) && arr[mid] === 0){
        return mid
      }else if(arr[mid] === 1){
        return findFirst(arr, mid+1, end)
      }else{
        return findFirst(arr,start, mid-1)
      }
    }
    return -1;
  }
  
  function countZeroes(arr){
    let start = findFirst(arr);
    if(start === -1){
      return 0
    }
    return arr.length - start
  }
  

module.exports = countZeroes

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0