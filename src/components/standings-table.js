function initToggle(root) {
  const buttons = root.querySelectorAll('[data-view-btn]');
  const panels = root.querySelectorAll('[data-view-panel]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.viewBtn;

      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.viewPanel !== target;
      });
    });
  });
}

function initAccordion(root) {
  const toggles = root.querySelectorAll('[data-row-toggle]');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const id = toggle.dataset.rowToggle;
      const detail = root.querySelector(`[data-row-detail="${id}"]`);
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';

      toggles.forEach((t) => {
        t.setAttribute('aria-expanded', 'false');
        const d = root.querySelector(`[data-row-detail="${t.dataset.rowToggle}"]`);
        if (d) d.hidden = true;
      });

      if (!isOpen) {
        toggle.setAttribute('aria-expanded', 'true');
        if (detail) detail.hidden = false;
      }
    });
  });
}

function initStageChips(root) {
  const chips = root.querySelectorAll('[data-stage-chip]');
  const panels = root.querySelectorAll('[data-stage-panel]');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const code = chip.dataset.stageChip;

      chips.forEach((c) => c.classList.toggle('is-active', c === chip));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.stagePanel !== code;
      });
    });
  });
}

function init() {
  document.querySelectorAll('.standings').forEach((root) => {
    initToggle(root);
    initAccordion(root);
    initStageChips(root);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
