# choo-slides
>  Create your presentation in a fun way

[![Build Status](https://travis-ci.org/geut/choo-slides.svg?branch=master)](https://travis-ci.org/geut/choo-slides)
[![npm version](https://badge.fury.io/js/%40geut%2Fchoo-slides.svg)](https://badge.fury.io/js/%40geut%2Fchoo-slides)

## What?

Create your presentation in a fun way!

- :ballot_box_with_check: Your slides are just `choo views`.
- :ballot_box_with_check: There is a default style and you can use tachyons!
- :ballot_box_with_check: Routing is done.
- :ballot_box_with_check: You can move around emitting: `FORWARD` AND `BACKWARD` builtin events.
- :ballot_box_with_check: UI Controls included.
- :ballot_box_with_check: Support for notes included.

## Install

`$ npm install @geut/choo-slides`

## Getting started

You can quickly create a project using [create-choo-app](https://github.com/choojs/create-choo-app).
From there, I usually create a `slides` folder. This is where your slides live and your slides are just [choo views](https://choo.io/docs/views). For example:

```javascript
var html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <h1>
    THIS IS A BOLD STATEMENT. LOL.
    </h1>
  `
}
```

I like to use `index.js` files to group things and export them from a single place that is easy to find. Usually like this:

```javascript
const slides = [
  require('./intro'),
  require('./features'),
  require('./useit')
]

module.exports = slides
```

Finally, you should include this file in your choo app, and use it.

```javascript
const chooSlides = require('@geut/choo-slides')
const slides = require('./slides')

// and then, after creating your choo app
app.use(chooSlides({ slides }))
```

You can take a look at the [example](./example/) directory. :cool:

## Usage

As mentioned before, usage is quite simple. `choo-slides` works like a plugin. It extends your choo-app adding support for navigating your *slides* like a presentation tool.
Also, adds a baseline style available via sheetify.

```
var css = require('sheetify')
var choo = require('choo')
var chooSlides = require('@geut/choo-slides')
var mySlides = require('./slides');

var app = choo()
app.use(chooSlides({ slides: mySlides }))

app.mount('body')
```

## Options

- **slides**: an `array` of choo views.
- **slideView**: a `function` representing a choo view. This can be used to overwrite the original slideView that comes with choo-slides.
- **notFoundView**: a `function` representing a choo view. This can be used to overwrite the original "not found" view.

## License

[MIT License](./LICENSE)
