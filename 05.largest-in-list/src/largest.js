/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {
	
	// var data = [1, 100, 32, 453, 21, 5, 23, 12, 90],
	// var data = [-1, -123, -2, -6, -10000, -10],
	// var data = [3, 3, 3, 3, 3, 3, 3, 3, 3],
  		largest = data[0];


	for (var i = 0; i <= data.length; i++){
	    if (largest < data[i]) {
	        largest = data[i];
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