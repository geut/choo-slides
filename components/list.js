const html = require('bel')
const ListItem = require('./listItem')

/*
 * Slide List (ul) component
 *
 * This component expects props:
 *  - @children: Array. REQUIRED
 *  - @classes: String. Default = 'list pl0'. OPTIONAL
 */
const List = ({children, classes = 'list pl0'}) => {
  if (!children || !Array.isArray(children)) throw new Error('List Component: An array of childrens is expected')

  return html`
    <ul class='${classes}'>${children.map(ListItem)}</ul>
  `
}

module.exports = List
