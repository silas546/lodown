'use strict';

// YOU KNOW WHAT TO DO //
 
 
/*
 * identity: Function which simply returns the exact argument passed to it
 * 
 * 
 * @param {Value} value: Any kind of value (a number, a string, an object, etc) 
 *  
 * @return {Value} value: returns the value passed in the argument
 *
 * 
 */
 
 function identity(value) {
     return value;
 }
 module.exports.identity = identity;
 
/*
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/*
 * first: returns the first element of an array. 
 * also takes a number n, which will instead return the first n items in the array
 *
 * @param {array} arr - the array to work with
 * @param {number} n - the n number of first items in the array to be returned
 *
 * @return {array[0]} Returns the arr[0] or the first index of array arr if only an array is passed in as argument
 * @return {array} If n was passed in, will return the first n items in the array
 *
 */
 
 function first(arr, n){
    if(!Array.isArray(arr) || n < 0) return [];
    if(n === undefined || typeof n !== 'number') return arr[0];
    return arr.slice(0, n);
}
module.exports.first = first;

/*
 * last: returns the last element of an array. 
 * also takes a number n, which will instead return the last n items in the array
 *
 * @param {array} arr - the array to work with
 * @param {number} n - the n number of last items in the array to be returned
 *
 * @return {array[array.length - 1]} Returns the last index of array arr if only an array is passed in as argument
 * @return {array} If n was passed in, will return the last n items in the array
 *
 */
 
 function last(arr, n){
    if(!Array.isArray(arr) || n < 0) return [];
    if(n === undefined || typeof n !== 'number') return arr[arr.length-1];
    if(n > arr.length) return arr;
    return arr.slice(n - 1);
}
module.exports.last = last;

/*
 * each: iterates over each element of a collection (which can be either an array or object)
 * and allows the user to execute actions(func) with the value, index and full collection.
 * meant to elemenate need of for and for in loops
 *
 * @param {array or object} collection - the array or object which each will be iterating through
 * @param {function} func - the action which the user will perform upon the iteration
 *
 *
 */
 
  function each(collection, func) {
    if (Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
      //perform any action that we want over the iterating array
      func(collection[i], i, collection); 
        }
     } else {
        for(let key in collection) {
        func(collection[key], key, collection);
    }
    }
    };
module.exports.each = each;

/*
 * indexOf: returns the index at which the first occurance of argument 'value' is found in an array
 *  returns -1 if value is not found in array
 * 
 * @param {array} array - the array which we will be searching for value inside
 * @param {value} value - the value we will be searching for within array
 *
 * @return{index} i - if the value is found ina rray, willr eturn the index i at which the value is first located
 * @return{integer} -1 - if value is not found in array, indexOf will return -1
 *
 */
 
function indexOf(array, value){
 for(var i = 0; i < array.length; i++){
     if(array[i] === value){
     return i;
     } 
 } return -1;
};
module.exports.indexOf = indexOf;

/*
 * filter: iterates through all elements in an array and returns a new array containing all elements for which
 * argument 'test' (a function) was truthy.
 * 
 * @param {array} array - the array which we will iterate through and test each element against function 'test'
 * @param {test} function - the function the user will use to test for the truthiness of elements in array
 *
 * @return{array} newArray - filter will return a new array containing each elemnt which gave a truthy value against test
 *
 */
 
function filter(array, test){
  let newArray = [];
  _.each(array, function(value, index, array){
      if(test(value, index, array)){
      newArray.push(value);
      }
  });
  return newArray;
};
module.exports.filter = filter;

/*
 * reject: iterates through all elements in an array and returns a new array containing all elements for which
 * argument 'test' (a function) was FALSEY. The opposite of filter.
 * 
 * @param {array} array - the array which we will iterate through and test each element against function 'test'
 * @param {test} function - the function the user will use to test for the falseyness of elements in array
 *
 * @return{array} rejectArray - filter will return a new array containing each elemnt which gave a falsey value against test
 *
 */
 
function reject(array, test){
    let rejectArray = [];
    _.filter(array, function(value, index, array){
        if (!test(value, index, array)){
            rejectArray.push(value);
        }
    }); return rejectArray;
};
module.exports.reject = reject;

/*
 * partition: iterates through all elements in an array and returns a new array containing all elements for which
 * argument 'test' (a function) was FALSEY and ANOTHER array containing all elements which test TRUTHY.
 * Both these arrays are then returned in a new array.
 * 
 * @param {array} array - the array which we will iterate through and test each element against function 'test'
 * @param {test} function - the function the user will use to test for the truthiness and falseyness of elements in array
 *
 * @return{array} newArray - partition will return both the truthiness and falsiness arrays as seperate items in array newArray
 *
 */
 
 function partition(array, test){
    var newArray = [];
    var truthArray = [];
    var falseArray = [];
    _.filter(array,function(value, index, array){
        if(!(test(value, index, array))){
            falseArray.push(value);
        } else if(test(value, index, array)){
            truthArray.push(value);
        }
    }); 
    newArray.push(truthArray);
    newArray.push(falseArray);
    return newArray;
    
};
module.exports.partition = partition;

/*
 * unique: iterates through all elements in an array and returns a new array containing all unique (non-duplicate) elements
 * 
 * 
 * @param {array} array - the array which we will iterate through and return the unique values from
 * 
 *
 * @return{array} uniqueArr - unique will return a new array containing only the unique (non-duplicate) elements in argument array
 *
 */
 
function unique(array){
   var uniqueArr = [];
   for(var i = 0; i < array.length; i++){
       if(_.indexOf(array, array[i]) === i){
           uniqueArr.push(array[i]);
       }
   } return uniqueArr;
};
module.exports.unique = unique;