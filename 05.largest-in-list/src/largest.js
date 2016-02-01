/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {

    if(!list.length) {
        throw 'List cannot be empty.';
    }

    var largest = -Infinity;

    for(var i = 0; i <= list.length; i++) {
    	if(largest < list[i]) {
    	   largest = list[i];
    	}
    }

    return largest;


  }

  return {
    findLargest: findLargest
  };
};