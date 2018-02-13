const html = require('choo/html')

const Notes = () => {
  return html`
    <div>
      <h3>See more:</h3>
      <ul class="list pl0">
        <li class='f5 lh-copy bb b--white-30'>Support for notes is included 🆒 </li>
      </ul>
    </div>
  `
}

const item = (text) => {
  return html`
        <li class="pa3 pa4-ns bb b--black-10">
          <span class="f3 db lh-copy measure">
            ${text}
          </span>
        </li>
    `
}

const Features = state => {
  return html`
    <section class="flex flex-column items-center roboto">
      <h2 class='f2 lh-copy'>FEATURES</h2>
      <ul class="list pl0 fr vh50">
        ${state.features.map(item)}
      </ul>
    </section>`
}

Features.notes = Notes
Features.title = 'Features'
Features.centered = false
Features.backgroundColor = 'bg-light-green'
Features.color = 'dark-gray'

module.exports = Features
