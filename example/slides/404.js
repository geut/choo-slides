const html = require('choo/html')

const NotFound = (state, emit) => {
  emit(state.events.DOMTITLECHANGE, 'Not Found')
  return html`
    <body class='baskerville'>
        <h1 class='f2-m f-headline-l fw6 tc'> Not Found </h1>
        <h2 class='f5 tc f4-m f3-l fw2 black-80 mt0 lh-copy'>
          Just a custom 404 handler 🚧
        </h2>
    </body>
    `
}

NotFound.title = 'NotFound'

NotFound.backgroundColor = 'bg-light-yellow'
NotFound.color = 'dark-gray'

module.exports = NotFound
