/**
 * Write a function that checks whether an element occurs in a list.
 */
var List = function() {
  'use strict';

  function has(list, element) {

  	var occurs = false,
  		listSize = list.length;

  	for (var i = 0; i < listSize; i++ ) {

  		if (element === list[i] ) {
  			occurs = true;
  		}
  	}

  	return occurs;

  }

  return {
    has: has
  };
};