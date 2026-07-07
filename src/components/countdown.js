function pad(value) {
  return String(Math.max(0, value)).padStart(2, '0');
}

function tick(root) {
  const target = new Date(root.dataset.target).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    root.querySelector('.countdown-tiles')?.setAttribute('hidden', '');
    root.querySelector('.countdown-live')?.removeAttribute('hidden');
    return false;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const values = { days, hours, minutes, seconds };
  for (const [unit, value] of Object.entries(values)) {
    const el = root.querySelector(`[data-unit="${unit}"]`);
    if (el) el.textContent = pad(value);
  }

  return true;
}

function init() {
  document.querySelectorAll('.countdown[data-target]').forEach((root) => {
    if (!tick(root)) return;
    const interval = setInterval(() => {
      if (!tick(root)) clearInterval(interval);
    }, 1000);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
