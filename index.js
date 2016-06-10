'use strict';

var Mold = require('mold-template');

exports.name = 'mold';
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  var mold = new Mold(options);
  return mold.bake(str, str);
};
