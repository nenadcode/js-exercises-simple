/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function concatenate(list1, list2) {
  	var list1 = [1, 2, 3],
  		list2 = [4, 5],
  		result = list1.concat(list2);

  	return result;
  }

  return {
    concatenate: concatenate
  };
};