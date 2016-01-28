/**
 * Write function that reverses a list, preferably in place.
 */
var List = function() {
  'use strict';

  function reverseList(list) {

    if ( (list === []) || (list === null) ) {
      return [] ;
    }

    if ( list.constructor !== Array ) {
      return [list];
    }

  	var data = [];

  	for (var i = 0, listSize = list.length; i < listSize; i++ ) {
  		data[i] = list[listSize-1-i];
  	}

  	return data;
  }

  return {
    reverseList: reverseList
  };
};