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

/*
 *  map: iterates through an array OR an object and creates an array mapArr made up of those values in that collection which 
 *  are passed through a certain test (argument func)
 * 
 * @param {collection} array or object - the array or object which map will iterate through and pass into function
 * @param {function} func - the test which the values of colleciton will be passed into and returned from
 *
 * @return{array} mapArr - returns a new array made up of the values of collection afetr they are passed into func
 *
 */
 
function map(collection, func){
    let mapArr = [];
    _.each(collection, function(value, index, array){
        mapArr.push(func(value,index,collection));
    });
    return mapArr;
};

module.exports.map = map;

/*
 *  pluck: iterates through an array of objects <array> and creates a new array <propArr> containing the value of property <property>
 *  for each object in <array>
 * 
 * @param {array} array - the array of objects which will be iterated through and checked for values of <property>
 * @param {property} property - the <property> which each element in the array will be checked for 
 *
 * @return{array} propArr - returns a new array made up of the values of <property> found in the objects of <array>
 *
 */
 
function pluck(array, property){
let propArr = [];
_.map(array, function(value, index, collection){
    propArr.push(collection[index][property]);
});
return propArr;
};
module.export.pluck = pluck;

/*
 *  contains: checks an array <array> for a value <value> and returns true if it contains <value>, returns false if it does not
 *  
 * 
 * @param {array} array - the array which will be checked for <value>
 * @param {value} value - the <value> contains is looking for within <array>
 *
 * @return{boolean} true or false - returns true or false based on whether or not <array> contains <value>
 *
 */
 
 function contains(array, value){
    return _.indexOf(array, value) > -1 ? true : false;
};
module.exports.contains = contains;

/*
 *  every: iterates through an array or object <collection> and passes each element if array or key-value if object into function <func>
 *  if the return value of <func> on EVERY SINGLE element of <collection> is truthy than every will return true, false otherwise
 * 
 * @param {collection} array or object - the array or objects whose elements or key-values if Object will be passed into <func> and tested for truthiness
 * @param {function} func - the function which we will pass elements of <collection> into
 *
 * @return{variable boolean} result - returns variable <result> with a value of true or false based on whether all elemts of collection were true
 *
 */

function every(collection, func){
    let result = true;
    _.each(collection, function(value, index, collection) {
        if(typeof func != "function"){
            if (!collection[index]){
                result = false;
            }
        }
        else if(!func(value, index, collection)){
           result = false; 
        }
    });
    return result;
};
module.exports.every = every;

/*
 *  some: iterates through an array or object <collection> and passes each element if array or key-value if object into function <func>
 *  if the return value of <func> on ANY element of <collection> is truthy than some will return true, false otherwise
 * 
 * @param {collection} array or object - the array or objects whose elements or key-values if Object will be passed into <func> and tested for truthiness
 * @param {function} func - the function which we will pass elements of <collection> into
 *
 * @return{variable boolean} result - returns variable <result> with a value of true or false based on whether any element of collection was true
 *
 */
 
function some(collection, func){
    let result = false;
    _.each(collection, function(value, index, collection) {
        if(typeof func != "function"){
            if(collection[index]){
                result = true;
            }
        }
        else if(func(value, index, collection)){
           result = true; 
        }
    });
    return result;
};
module.exports.some = some;

/*
 *  reduce: reduces <arr> to a value <seed> which is the total result of of every elemnt in <arr> being iterated through
 *  and passed into <func>, with the total value  tracked through each iteraiton via <seed>.
 *  IF seed is not provided by user, it will default to value of arr[0]
 *
 * @param {array} arr - the array whose elements will be passed into <func> each iteration
 * @param {function} func - the function which we will pass elements of <arr> through
 * @param {seed} seed - keeps track of the return value of the iteration of every function. Value of seed will be returned after iteraiton is completed
 *
 * @return{seed} seed - returns the final value of <seed> after each element of <arr> has been passed through <func>
 *
 */
 
function reduce(arr, func, seed){
    var considerFirst = true;
    if(arguments.length < 3){
        seed = arr[0];
        considerFirst = false;
    }
    _.each(arr, function(value, index, arr){
       if(index > 0 || considerFirst){
           seed = func(seed, value, index);
       } 
    });
    return seed;
};
module.export.reduce = reduce;

/*
 *  extend: Copies the properties of an indefinite number of object <arguments> into the first object argument
 *  
 * 
 * @param {object} objects - A collection of objects, the first one of which willr eceive the properties of all the others
 * 
 *
 * @return{object} objectDest - returns the first object which now has the properties of all other arguments passed to _.extend
 *
 */
 
 function extend(objects){
    let objDest = arguments[0];
    if(arguments.length < 2){
        return;
    }
        for(var i = 1; i < arguments.length; i++){
            let objSource = arguments[i];
            for(var key in arguments[i]){
                objDest[key] = objSource[key];
            }
        } return objDest;
    };
module.export.extend = extend;