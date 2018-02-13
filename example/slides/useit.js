const html = require('choo/html')

const item = (text) => {
  return html`
        <li class="pa3 pa4-ns bb b--black-10">
          <span class="f3 db lh-copy measure-wide">
            ${text}
          </span>
        </li>
    `
}

const Usage = state => {
  return html`
    <section class="flex flex-column items-center roboto">
      <h2 class='f2 lh-copy'>USAGE</h2>
      <ol class="list pl0 fr vh50">
        ${state.usage.map(item)}
      </ol>
    </section>`
}

Usage.title = 'Usage'
Usage.centered = false
Usage.backgroundColor = 'bg-light-green'
Usage.color = 'dark-gray'

module.exports = Usage
