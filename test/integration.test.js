/* eslint-env jest */

const choo = require('choo')
// const html = require('choo/html')
const chooSlides = require('../')

var app
describe('Usage with choo', () => {
  beforeEach(() => {
    app = choo()
  })

  test('use chooSlides', () => {
    expect(() => {
      app.use(chooSlides())
    }).not.toThrowError()
  })
  /* NOTE (dk): OUT OF USAGE since I figure it out how to do it with the new v6
  test('check chooSlides state', () => {
    app.use(chooSlides())

    expect(app.state.events).toBeDefined()
    console.log('events', chooSlides.events)
    console.log('app.state.events', app.state.events)
    Object.keys(chooSlides.events).forEach(key => {
      expect(app.state.events[key]).toBe(chooSlides.events[key])
    })
    expect(app.state.chooSlides).toBeDefined()

    expect(app.state.chooSlides.slides.length).toBe(0)

    expect(app.state.chooSlides.current).toBe(0)
  })

  test('trigger custom events and chooSlides state', () => {
    expect.assertions(2)
    app.use(chooSlides())

    app.emit('DOMContentLoaded')

    expect(app.state.chooSlides.current).toBe(0)

    app.emit(chooSlides.events.FORWARD)

    expect(app.state.chooSlides.current).toBe(1)
  })

  test('instantiate choo slides with a custom view', () => {
    expect.assertions(2)

    var customView = () => html`<body><h1>Not found</h1></body>`
    app.use(chooSlides({ slides: [() => html`<h1>Hola Mundo</h1>`], notFoundView: customView }))

    app.emit('DOMContentLoaded')

    expect(app.state.chooSlides.notFoundView).toBeDefined()

    expect(app.toString('/404').trim()).toEqual(customView().toString())
  })
  */
})
