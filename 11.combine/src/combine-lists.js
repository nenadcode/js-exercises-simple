/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {

       var result = [],
        length = list1.length;

        if (list2.length > length) {
            length = list2.length;
        };

        for (var i = 0; i < length; i++) {
            if (list1[i] != undefined) {
                result.push(list1[i]);
            }

            if (list2[i] != undefined) {
                result.push(list2[i]);
            }                
        }

        return result;
  }

  return {
    combine: combine
  };
};