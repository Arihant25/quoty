let saveTimer = null;
let currentMode = 'quote';
let currentTimeStyle = 'digital';

function activateTab(selector, attr, value) {
  document.querySelectorAll(selector).forEach(t => {
    t.classList.toggle('active', t.dataset[attr] === value);
  });
}

function setMode(mode, save) {
  currentMode = mode;
  activateTab('.tab', 'mode', mode);
  document.getElementById('time-options').style.display = mode === 'time' ? '' : 'none';
  document.getElementById('custom-section').style.display = mode === 'custom' ? '' : 'none';
  if (save) scheduleSave();
}

function setTimeStyle(style, save) {
  currentTimeStyle = style;
  activateTab('.sub-tab', 'style', style);
  if (save) scheduleSave();
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persist, 500);
}

function persist() {
  chrome.storage.sync.set({
    displayMode: currentMode,
    customMessage: document.getElementById('custom-msg').value.trim(),
    timeStyle: currentTimeStyle,
  }, flash);
}

function flash() {
  const el = document.getElementById('status');
  el.classList.add('visible');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('visible'), 1200);
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => setMode(tab.dataset.mode, true));
});

document.querySelectorAll('.sub-tab').forEach(tab => {
  tab.addEventListener('click', () => setTimeStyle(tab.dataset.style, true));
});

document.getElementById('custom-msg').addEventListener('input', scheduleSave);

chrome.storage.sync.get(
  { displayMode: 'quote', customMessage: '', timeStyle: 'digital' },
  ({ displayMode, customMessage, timeStyle }) => {
    document.getElementById('custom-msg').value = customMessage;
    setTimeStyle(timeStyle, false);
    setMode(displayMode, false);
  }
);
