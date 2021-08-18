function findRotatedIndex(arr, search){
    let pointOfChange = findChange(arr, search);
    let start;
    let end;
    if(search > pointOfChange){
      start = 0;
      end = pointOfChange -1;
    }else{
      start = pointOfChange
      end = arr.length-1
    }
    return bSearch(arr, search, start, end)
  }
  
  //find point of change and then perform a binary search from the index of that point on
  
  function findChange(arr){
    //find the value where arr[mid -1] < arr[mid] && arr[mid +1] < arr[mid]
    let start = 0;
    let end = arr.length -1;
  
    while(start <= end){
      let mid = Math.floor((start+end)/2);
  
      if(arr[mid-1]<arr[mid] && arr[mid+1]<arr[mid]){
        return mid+1
      }else if(arr[mid] < arr[start]){
        end = mid - 1;
      }else{
        start = mid + 1;
      }
    }
    return -1
  }
  
  function bSearch(arr, val, start = 0, end = arr.length-1){
  
    while(start <= end){
      let mid = Math.floor((start+end)/2);
      if(arr[mid] === val){
        return mid
      }else if(arr[mid] < val){
        start = mid+1;
      }else{
        end = mid-1;
      }
    }
    return -1
  }

module.exports = findRotatedIndex