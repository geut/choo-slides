let slides = [];

// Note (dk): temporal place here... move views out (views.js?)
// The views
const routeView = function routeView (state, emit) {
    state.params.slideIdx = state.params.slideIdx || 0;
    const idx = Number(state.params.slideIdx);
    if (Number.isNaN(idx) || idx >= slides.length) {
        emit(state.events.REPLACESTATE, '/not-found');
    }

    state.presentation.current = Number(state.params.slideIdx) || 0;
    return slides[state.presentation.current](state, emit);
};

const notFoundView = function notFoundView (state, emit) {
    emit(state.events.DOMTITLECHANGE, 'Not Found');
    return html`
    <body>
        <section class='vh-100 dt w-100 bg-washed-blue baskerville'>
            <header class='tc ph5 lh-copy'>
                <h1 class='f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple'>404</h1>
                <h2 class='tc f1-l fw1'>🚉  Missing train?</h2>
            </header>
            <p class='fw1 i tc mt4 mt5-l f4 f3-l'>Previous stations:</p>
            <ul class='list tc w-100 w-50-l center mt5'>
                ${state.presentation.slides.map((slide, idx) => {
                    return html`
                        <li class="dib mr2"><a class='f4 f2-ns b db pa2 link dim mid-gray hover-light-purple' href='/${idx}'> 💺  ${slide.title} </a></li>
                    `;
                })}
            </ul>
        </section>
    </body>
    `;
}

module.exports = slides;

function slides (options) {
    options = options || {
        router: true,
        slidesDir: join(__dirname, 'slides')
    };

    slides = require(slidesDir);

    const store = function store(state, emitter, app){
        // initialize things
        if (!state.chooSlides){
            // Note (dk): we are using app state to store some presentations data.
            // An alt-approach will be to use sessionStorage
            state.chooSlides = {};
            state.chooSlides.slides = slides;
            state.chooSlides.current = 0; // the first slide
            // add routes... controversial indeed
            if (options.router){
                app.route('/', options.routeView || routeView);
                app.route(`/:slideIdx`, options.routeView || routeView);
                app.route(`*`, options.notFoundView|| routeView);
            }
        }

        emitter.on(state.events.DOMCONTENTLOADED, () => {
            emitter.on('choo-slides:fw', forward);
            emitter.on('choo-slides:bw', backward);
            emitter.on('choo-slides:goto', goto);
        });

        const forward = () => {
            state.chooSlides.current += 1;
            emitter.emit(state.events.PUSHSTATE, `/${state.chooSlides.current}`);
            emitter.emit('log:debug', `choo-slides:forward ${state.chooSlides.current}`);
        }

        const backward = () => {
            (state.chooSlides.current <= 0) ? state.chooSlides.current = 0 : state.chooSlides.current -= 1;
            emitter.emit(state.events.PUSHSTATE, `/${state.chooSlides.current}`);
            emitter.emit('log:debug', `choo-slides:backward ${state.chooSlides.current}`);
        }

        const goto = (idx) => {
            state.chooSlides.current = idx;
            emitter.emit(state.events.PUSHSTATE, `/${state.chooSlides.current}`);
            emitter.emit('log:debug', `choo-slides:goto ${state.chooSlides.current}`);
            emitter.emit('render');
        }
    }

    store.storeName = 'choo-slides';

    return store;
}
