const html = require('bel')
const css = require('sheetify')

const headerStyle = css`
  :host .vh50 {
    height: 50vh
  }
`
const slideTitleEl = (slideTitle) => {
  if (!slideTitle) return ''

  return html`
    <h2 class="f6 black-70 fw2 ttu tracked">${slideTitle}</h2>
  `
}

const headerChildren = (children) => {
  if (!children) return ''

  return children()
}

/*
 * Slide Header component
 *
 * This component expects state:
 *  - @title: String - presentation title. REQUIRED
 *  - @slideTitle: String - current slide title. OPTIONAL
 */
const Header = (state) => {
  return html`
    <header class='${headerStyle} pl0 pr0 pl4-ns pr4-ns pv4 pv5-ns'>
      ${headerChildren(state.headerChildren)}
      <h1 class="f5 f4-ns fw6 black-70">${state.title}</h1>
      ${slideTitleEl(state.slideTitle)}
    </header>
  `
}

module.exports = Header
