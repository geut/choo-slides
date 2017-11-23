const html = require('choo/html');
const Control =  require('./control');
const Note = require('./note');

const Slide = children => (state, emit) => {

    emit('log:debug', 'Rendering slide view');
    emit(state.events.DOMTITLECHANGE, children.title);
    // defaults
    if (typeof children.centered === 'undefined') children.centered = true;

    const navigate = (e) => {
        switch (e.keyCode){
            case 32:
            case 39:
                // move to the next slide
                emit('choo-slides:fw');
                break;
            case 37:
                // move to the previous slide
                emit('choo-slides:bw');
                break;
            default:
                // do nothing
                break;
        }
    };

    return html`
        <body class='relative sans-serif' onkeydown=${navigate}>
            <article class='vh-100 dt w-100 ${children.backgroundColor}'>
                <div class='dtc v-mid ${children.centered ? 'tc': ''} ${children.color} ph3 ph4-l'>
                    ${children(state)}
                </div>
            </article>
            ${Control(state, emit)}
            ${Note(children, emit)}
        </body>
    `;
}

module.exports = Slide;
