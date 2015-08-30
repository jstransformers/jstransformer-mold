# jstransformer-mold

[Mold](https://github.com/marijnh/mold) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mold/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mold)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-mold/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-mold?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-mold/master.svg)](http://david-dm.org/jstransformers/jstransformer-mold)
[![NPM version](https://img.shields.io/npm/v/jstransformer-mold.svg)](https://www.npmjs.org/package/jstransformer-mold)

## Installation

    npm install jstransformer-mold

## API

```js
var mold = require('jstransformer')(require('jstransformer-mold'))

mold.render('Hello, <?name ?>!', { name: 'World' }).body
//=> 'Hello, World!'
```

## License

MIT
