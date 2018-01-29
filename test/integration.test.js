const choo = require('choo');
const chooSlides = require('../');

var app;

describe('Usage with choo', () => {

    beforeEach(() => {
        app = choo();
    })

    test('use chooSlides', () => {

        expect(() => {
            app.use(chooSlides())
        })
        .not.toThrowError();
    })

    test('check chooSlides state', () => {

        app.use(chooSlides());

        expect(app.state.events).toBeDefined();

        Object.keys(chooSlides.events).forEach(key => {

            expect(app.state.events[key]).toBe(chooSlides.events[key]);
        })

        expect(app.state.chooSlides).toBeDefined();

        expect(app.state.chooSlides.slides.length).toBe(0);

        expect(app.state.chooSlides.current).toBe(0);
    })

    test('trigger custom events and chooSlides state', () => {

        app.use(chooSlides());

        app.emit('DOMContentLoaded');

        expect(app.state.chooSlides.current).toBe(0);

        app.emit(chooSlides.events.FORWARD);

        expect(app.state.chooSlides.current).toBe(1);
    })
});
