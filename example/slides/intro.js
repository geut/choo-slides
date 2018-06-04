const html = require('choo/html')
const { headline, text } = require('../../components')

const Intro = state => {
  return html`
    <section class='dib v-mid vh100'>
        ${headline({title:'Choo Slides', classes:'f-headline fw6 tc'})}
        ${text({text: 'Build your own presentation using choo 🚂', classes:'f5 f4-m f3-l fw2 black-50 mt0 lh-copy'})}
    </section>
    `
}

Intro.title = 'Intro'

Intro.backgroundColor = 'bg-light-green'
Intro.color = 'dark-gray'

module.exports = Intro
