const chooSlides = require('../');

describe('chooSlides creation', () => {

    test('with default options', () => {

        var store = chooSlides();

        expect(typeof store).toBe('function');
        expect(store).toHaveProperty('storeName', 'choo-slides');
    })

    test('with router option false', () => {
        var store = chooSlides({router: false });

        expect(typeof store).toBe('function');
        expect(store).toHaveProperty('storeName', 'choo-slides');
    })

    test('with invalid options', () => {
        expect(() => {
            chooSlides('invalid')
        })
        .toThrowError('chooSlides: options should be an object');
    })

    test('with invalid router option', () => {
        expect(() => {
            chooSlides({ router: 'invalid' })
        })
        .toThrowError('chooSlides: options.router should be a boolean')
    })

    test('with invalid slides option', () => {
        expect(() => {
            chooSlides({ slides: {} })
        })
        .toThrowError('chooSlides: options.slides should be an array');
    })
})

