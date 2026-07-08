function init() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-hero-video]').forEach((video) => {
    if (!reduceMotion) return;

    const wrapper = video.closest('.hero-video');
    const playButton = wrapper ? wrapper.querySelector('[data-hero-video-play]') : null;

    video.pause();
    video.removeAttribute('autoplay');

    if (playButton) {
      playButton.hidden = false;
      playButton.addEventListener('click', () => {
        video.play();
        playButton.hidden = true;
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
