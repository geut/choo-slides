const html = require('choo/html')
const { list, headline } = require('../../components');

const Usage = state => {
  const { usage } = state;
  return html`
    <section class="flex flex-column items-center roboto">
      ${headline({title: 'Usage', level: 2, classes: 'f2 tc'})}
      ${list({children: usage, classes: 'list pl0 fr vh50'})}
    </section>`
}

Usage.title = 'Usage'
Usage.centered = false
Usage.backgroundColor = 'bg-light-green'
Usage.color = 'dark-gray'

module.exports = Usage
