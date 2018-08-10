const html = require('choo/html')
const { list, headline } = require('../../components')

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

const Features = state => {
  const { features } = state
  return html`
    <section class="flex flex-column items-center roboto">
      ${headline({title: 'Features', level: 2, classes: 'f2 tc'})}
      ${list({children: features, classes: 'list pl0 fr vh50'})}
    </section>`
}

Features.notes = Notes
Features.title = 'Features'
Features.centered = false
Features.backgroundColor = 'bg-light-green'
Features.color = 'dark-gray'

module.exports = Features
