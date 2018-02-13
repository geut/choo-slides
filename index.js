const assert = require('assert')
const SlideShell = require('./components/slide')
const SlideView = require('./views/slide')
const NotFoundView = require('./views/404')

module.exports = chooSlides

const events = exports.events = chooSlides.events = {
  FORWARD: 'choo-slides:fw',
  BACKWARD: 'choo-slides:bw',
  GOTO: 'choo-slides:goto',
  DEBUG: 'log:debug'
}

function mapSlides (slides) {
  return slides.map(slide => {
    const shell = SlideShell(slide)
    Object.assign(shell, slide)
    return shell
  })
}

function chooSlides (options) {
  options = options || {}

  assert.equal(typeof options, 'object', 'chooSlides: options should be an object')

  options = Object.assign({
    slides: []
  }, options)

  if (options.slides) {
    assert.equal(Array.isArray(options.slides), true, 'chooSlides: options.slides should be an array')
  }

  const store = (state, emitter, app) => {
    // initialize chooSlides
    if (!state.chooSlides) {
      // Note (dk): we are using app state to store some presentations data.
      // An alt-approach will be to use sessionStorage
      state.chooSlides = {}
      state.chooSlides.slides = mapSlides(options.slides)
      state.chooSlides.current = 0 // the first slide
      state.chooSlides.notFoundView = options.notFoundView || NotFoundView;
      // add routes
      app.route('/', options.slideView || SlideView)
      app.route('/:slideIdx', options.slideView || SlideView)
      app.route('/404', options.notFoundView || NotFoundView)
      // mix events
      Object.assign(state.events, events)
    }

    emitter.on(state.events.DOMCONTENTLOADED, () => {
      emitter.on(events.FORWARD, forward)
      emitter.on(events.BACKWARD, backward)
      emitter.on(events.GOTO, goto)
    })

    const forward = () => {
      state.chooSlides.current += 1
      emitter.emit(state.events.PUSHSTATE, `/${state.chooSlides.current}`)
      emitter.emit(events.DEBUG, `choo-slides:forward ${state.chooSlides.current}`)
    }

    const backward = () => {
      (state.chooSlides.current <= 0) ? state.chooSlides.current = 0 : state.chooSlides.current -= 1
      emitter.emit(state.events.PUSHSTATE, `/${state.chooSlides.current}`)
      emitter.emit(events.DEBUG, `choo-slides:backward ${state.chooSlides.current}`)
    }

    const goto = (idx) => {
      state.chooSlides.current = idx
      emitter.emit(state.events.PUSHSTATE, `/${state.chooSlides.current}`)
      emitter.emit(events.DEBUG, `choo-slides:goto ${state.chooSlides.current}`)
      emitter.emit('render')
    }
  }

  store.storeName = 'choo-slides'

  return store
}
