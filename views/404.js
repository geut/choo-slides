const html = require('bel');

module.exports = notFoundView;

function notFoundView (state, emit) {
    emit(state.events.DOMTITLECHANGE, 'Not Found');
    return html`
    <body class="flex items-center">
        <section class='vh-100 dt w-100 bg-washed-blue baskerville'>
            <header class='tc ph5 lh-copy'>
                <h1 class='f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple'>404</h1>
                <h2 class='tc f1-l fw1'>🚉  Missing train?</h2>
            </header>
            <p class='fw1 i tc mt4 mt5-l f4 f3-l'>Previous stations:</p>
            <ul class='list tc w-50-l center mt5'>
                ${state.chooSlides.slides.map((slide, idx) => {
                    return html`
                        <li class="dib mr2"><a class="f4 f2-ns b db pa2 link dim mid-gray hover-light-purple" href="/${idx}"> 💺  ${slide.title} </a></li>
                    `;
                })}
            </ul>
        </section>
    </body>
    `;
}
