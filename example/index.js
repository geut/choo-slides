var css = require('sheetify')
var choo = require('../node_modules/choo') // using local choo version
var chooSlides = require('../')
var myStore = require('./store')
var mySlides = require('./slides')
var notFoundView = require('./slides/404')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  // Enable once you want service workers support. At the moment you'll
  // need to insert the file names yourself & bump the dep version by hand.
  // app.use(require('choo-service-worker')())
}

app.use(myStore)
app.use(chooSlides({ slides: mySlides, notFoundView: notFoundView }))

window.chooExample = app

if (!module.parent) app.mount('body')
else module.exports = app
