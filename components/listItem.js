const html = require('bel')

/*
 * Slide ListItem (li) component
 *
 * This component expects props:
 *  - @content: Function || String. REQUIRED
 *  - @classes: String. Default = 'pa3 pa4-ns bb b--black-10'. OPTIONAL
 */
const ListItem = ({content, classes = 'pa3 pa4-ns bb b--black-10'}) => {
  if (!content) throw new Error('ListItem Component: Some content is expected')

  return html`
    <li class='${classes}'>${(typeof content === 'function') ? content() : content}</li>
  `
}

module.exports = ListItem
