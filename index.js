'use strict';

var mold = require('mold-template');
var extend = require('extend-shallow');

exports.name = 'mold';
exports.inputFormats = ['mold', 'moldbar'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var opts = extend({}, options, locals);
  return mold.bake(str, opts)(opts);
};
