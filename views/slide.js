const NotFoundView = require('./404');

module.exports = slideView;

function slideView (state, emit) {
    state.params.slideIdx = state.params.slideIdx || 0;
    const idx = Number(state.params.slideIdx);
    if (Number.isNaN(idx) || idx >= state.chooSlides.slides.length) return NotFoundView(state, emit);
    state.chooSlides.current = Number(state.params.slideIdx);
    return state.chooSlides.slides[state.chooSlides.current](state, emit);
};
