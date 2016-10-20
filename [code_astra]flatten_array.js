//Given a nested array write a recursive function to flatten the array. The flattened array has no nested levels.
//Input: [1, 2, [3, [4]], 5]
//Output: [1, 2, 3, 4, 5]
//Input: [1, 2, [3, [4, [5], [6, 7], 8], 9], 10, [11, [12, 13], 14], 15]
//Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

input = [1, 2, [3, [4]], 5];

console.log(flatten_arr(input))

function flatten_arr(arr){
  var result = []
  for(var i = 0 ; i < arr.length; i+=1){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten_arr(arr[i]));
    } else {
      result = result.concat(arr[i])
    }
  }
  return result;
}
