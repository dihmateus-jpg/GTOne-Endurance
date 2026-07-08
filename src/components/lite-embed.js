function mountEmbed(button) {
  const id = button.dataset.ytId;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
  iframe.title = button.getAttribute('aria-label') || 'YouTube video player';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.className = 'lite-embed-iframe';
  button.replaceWith(iframe);
}

function init() {
  document.querySelectorAll('.lite-embed[data-yt-id]').forEach((button) => {
    button.addEventListener('click', () => mountEmbed(button));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
