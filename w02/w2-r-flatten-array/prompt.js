// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening. Some examples:
//  flatten([]) // should return []
//  flatten([1, 2, 3]) //should return [1,2,3]
//  flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]) //should return [1, 2, 3, "a", "b", "c", 1, 2, 3]
//  flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]) //should return [3, 4, 5, [9, 9, 9], "a,b,c"]

function flatten(array) {
  if (array.length === 0) {
    return [];
  } else if (typeof array[0] !== 'object') {
    return array;
  }

  var singleArray = array.reduce(function (result, arr) {
    return result.concat(arr);
  });

  return singleArray;
}

module.exports = {
  flatten:flatten,
  attendance:'RANDOM WORD HERE'
};
