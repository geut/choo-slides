module.exports = demoStore

function demoStore(state, emitter){
    // initialize features
    if (!state.features){
        state.features = [
            "☑️ Your slides are just choo views.",
            "☑️ There is a default style and you can just use tachyons!",
            "☑️ Routing is done.",
            "☑️ You can move around emitting: FORWARD AND BACKWARD builtin events.",
            "☑️ UI Controls included.",
            "☑️ Nothing new: just choo.",
        ],
        state.usage = [
          "1. npm install geut@choo-slides",
          "2. create your choo app",
          "3. inside your app: app.use(chooSlides({ slides: require('./mySlides') })",
          "that's it!, now you can work on your slides 🎉"
        ]
    }

    emitter.emit('render')
}
