const html = require('bel');
const css = require('sheetify');

const menuStyle = css`
    :host .menu {
        min-height: 0;
        max-height: 0;
        transition: max-height 0.4s;
    }

    :host .menu--open {
        max-height: 25rem;
    }
`

let showGoto = false;

const Control = (state, emit) => {
    const movefw = () => {
        emit(state.events.FORWARD);
    }

    const movebw = () => {
        emit(state.events.BACKWARD);
    }

    const toggleGoto = () => {
        showGoto = !showGoto;
        emit('render');
    }

    const gotoItem = (title, idx) => {
        const gotoSlide = () => {
            showGoto = false;
            emit(state.events.GOTO, idx);
        }
        return html`
            <li onclick=${gotoSlide} class="lh-copy pa2 pointer">${title}</li>
        `
    }

    return html`
        <section class='${menuStyle} w-50 w-40-m w-auto-ns overflow-y-auto absolute tr bottom-1 right-2'>
            <button onclick=${movebw} class='outline-transparent pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1'>◀</span>
            </button>
            <button onclick=${toggleGoto} class='outline-transparent pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1'>❖ </span>
            </button>
            <button onclick=${movefw} class='outline-transparent pointer grow-large bn no-underline bg-transparent hover-white inline-flex items-center pa3'>
                <span class='w1 '>▶</span>
            </button>
            <aside class="overflow-x-hidden  menu ${ showGoto ? "menu--open" : ""} db-l w-100 tc mv0 f3 fw3 f5-l bg-black-80 white-90">
                <div class="pb2 ph4-l ph3 ph5-xl tl measure-wide">
                    <ul class="list">
                        ${state.chooSlides.slides.map((slide, idx) => {
                            return gotoItem(slide.title, idx)
                        })}
                    </ul>
                </div>
            </aside>
        </section>
    `;
};

module.exports = Control;
