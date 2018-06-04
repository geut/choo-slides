const html = require('bel')

/*
 * Slide Text (p) component
 *
 * This component expects props:
 *  - @text: String. REQUIRED
 *  - @classes: String. Default = 'f2 lh-copy black-90'. OPTIONAL
 */
const Text = ({text, classes='f2 lh-copy black-90'}) => {
  if (!text) throw 'Text Component: Some text is expected'

  return html`
    <p class='${classes}'>${text}</p>
  `
}

module.exports = Text;
