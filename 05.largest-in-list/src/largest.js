/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {
	
	// var data = [1, 100, 32, 453, 21, 5, 23, 12, 90],
	// var data = [-1, -123, -2, -6, -10000, -10],
	// var data = [3, 3, 3, 3, 3, 3, 3, 3, 3],

	if (!list.length) {
		throw 'List cannot be empty.'; 
	}
  		var largest = -Infinity;


	for (var i = 0; i <= list.length; i++){
	    if (largest < list[i]) {
	        largest = list[i];
	    }
	}

	/*if(data = []) {
		throw ('List cannot be empty.');
	}*/

	return largest;
  }

  return {
    findLargest: findLargest
  };
};