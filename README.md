# choo-slides
>  Create your presentation in a fun way

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

## Usage

`choo-slides` works like a plugin. It extends your choo-app adding support for navigating your *slides* like a presentation tool.
Also, adds a baseline style available via sheetify.

```
var css = require('sheetify')
var choo = require('choo')
var chooSlides = require('@geut/choo-slides')
var mySlides = require('./slides');

css('@geut/choo-slides')

var app = choo()
app.use(chooSlides({ slides: mySlides }))

app.mount('body')
```

## Options

- slides: an `array` of choo views.
- slideView: a `function` representing a choo view. This can be used to overwrite the original slideView that comes with choo-slides.
- notFoundView: a `function` representing a choo view. This can be used to overwrite the original "not found" view.

