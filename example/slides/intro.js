const html = require('choo/html')

const Intro = state => {
  return html`
    <section class='dib v-mid vh100'>
        <h1 class='f2-m f-headline-l fw6 tc'> Choo Slides </h1>
        <h2 class='f5 f4-m f3-l fw2 black-50 mt0 lh-copy'>
            Build your own presentation using choo 🚂
        </h2>
    </section>
    `
}

Intro.title = 'Intro'

Intro.backgroundColor = 'bg-light-green'
Intro.color = 'dark-gray'

module.exports = Intro
