'use strict'

const Mold = require('mold-template')

exports.name = 'mold'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  const mold = new Mold(options)

  return mold.bake(str, str)
}
