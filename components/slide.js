const html = require('bel');
const Control =  require('./control');
const Note = require('./note');

const Slide = children => (state, emit) => {

    emit(state.events.DEBUG , 'Rendering slide view');
    emit(state.events.DOMTITLECHANGE, children.title);
    // defaults
    if (typeof children.centered === 'undefined') children.centered = true;
    if (typeof children.vmiddle === 'undefined') children.vmiddle = false;
    if (typeof children.paddings === 'undefined') children.paddings = true;
    const navigate = (e) => {
        switch (e.keyCode){
            case 32:
            case 39:
                // move to the next slide
                emit(state.events.FORWARD);
                break;
            case 37:
                // move to the previous slide
                emit(state.events.BACKWARD);
                break;
            default:
                // do nothing
                break;
        }
    };

    return html`
            <body class='relative sans-serif' onkeydown=${navigate}>
                <article class='vh-100 dt w-100 ${children.backgroundColor}'>
                    <div class='${children.vmiddle ? 'dtc v-mid' : ''} ${children.centered ? 'tc': ''} ${children.color} ${children.paddings ? 'ph3 ph4-l' : ''}'>
                        ${children(state, emit)}
                    </div>
                </article>
                ${Control(state, emit)}
                ${Note(children, emit)}
            </body>
        `
}

module.exports = Slide;
