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

    var data = list.reverse();

    return data;
  }

  return {
    reverseList: reverseList
  };
};