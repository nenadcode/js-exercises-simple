/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function() {
  'use strict';

	function calculate(n, opts) {
		var res,
			mode = opts.mode;

		if(mode !== 'product' && mode !== 'sum') {
			throw 'Invalid calculation mode.';
		}

		if(mode == 'sum') {
			res = 0;
		} else {
			res = 1;
		}

		for(var i = 1; i <= n; i++) {
			if(mode == 'sum') {
				res = res + i;
			} else {
				res = res * i;
			}
		}

		return res;
	}

	return {
	calculate: calculate
	};
};