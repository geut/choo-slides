const html = require('bel')
const css = require('sheetify')

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
const Note = (children, emit) => {
    // Note (dk): notes can be turned into somekind of HOC
    // if that its the case then we can move this out of here
    // making things smaller.

  if (!children.notes) return ''

  const toogleNotes = () => {
    children.on = !children.on
    emit('render')
  }

  return html`
        <section class="${menuStyle} w-50 w-40-m w-auto-ns overflow-y-auto absolute items-center bottom-1 left-2 justify-center">
            <button class="outline-transparent pointer f5 no-underline black bg-animate bg-transparent hover-white inline-flex items-center pa3 ba b--transparent border-box mr4" onclick="${toogleNotes}"> Notas ${children.on ? '▼' : '▲'} </button>
            <aside class="overflow-x-hidden menu ${children.on ? 'menu--open' : ''} db-l w-100 tc mv0 f3 fw3 f5-l bg-black-80 white-90">
                <div class="pb2 ph4-l ph3 ph5-xl tl measure-wide">
                    ${children.notes ? children.notes() : ''}
                </div>
            </aside>
        </section>
    `
}

module.exports = Note
