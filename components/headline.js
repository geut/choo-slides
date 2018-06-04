const raw = require('bel/raw')

/*
 * Slide headline (hx) component
 *
 * This component expects props:
 *  - @title: String. REQUIRED
 *  - @level: Number. Default = 1. OPTIONAL
 *  - @classes: String. Default = 'f-headline lh-solid black-70'. OPTIONAL
 */
const Headline = ({title, level = 1, classes = 'f-headline lh-solid black-70'}) => {
  if (!title) throw new Error('Headline Component: A title is expected')

  if (level < 1) {
    level = 1
  } else if (level > 6) {
    level = 6
  }

  return raw(`<h${level} class='${classes}'>${title}</h${level}>`)
}

module.exports = Headline
