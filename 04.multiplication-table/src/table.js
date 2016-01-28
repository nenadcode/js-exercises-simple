/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
	var MultiplicationTable = function() {
		'use strict';

	function generate5() {
	    
	    var number = 5,
	    	table = [];

	    for (var i = 0; i <= number; i++) {
	    	table[i] = [];
	    }

	    table[0][0] = 0;

	    for (var i = 1; i <= number; i++) {
	    	table[0][i] = i;
	    	table[i][0] = i;

	    	for (var k = 1; k <= i; k++) {
	    		table[i][k] = table[i][0] * table[0][k];
	    		table[k][i] = table[i][k];
	    	}
	    }

	    return table;
	}	

	return {
		generate5: generate5
	};
};