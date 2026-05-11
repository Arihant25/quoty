const FALLBACK_QUOTES = [
  { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "The world is a book, and those who do not travel read only one page.", author: "Saint Augustine" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "The only way out is through.", author: "Robert Frost" },
  { text: "A ship in harbor is safe, but that is not what ships are for.", author: "John A. Shedd" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only journey is the one within.", author: "Rainer Maria Rilke" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Darkness cannot drive out darkness; only light can do that.", author: "Martin Luther King Jr." },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
  { text: "You may be disappointed if you fail, but you are doomed if you don't try.", author: "Beverly Sills" },
  { text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", author: "Dalai Lama" },
  { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
  { text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr." },
  { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
  { text: "When we love, we always strive to become better than we are.", author: "Paulo Coelho" },
  { text: "The most common form of despair is not being who you are.", author: "Søren Kierkegaard" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "Two roads diverged in a wood, and I took the one less traveled by.", author: "Robert Frost" },
  { text: "You have to be odd to be number one.", author: "Dr. Seuss" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
  { text: "It is never too late to be what you might have been.", author: "George Eliot" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
  { text: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "I can't go back to yesterday because I was a different person then.", author: "Lewis Carroll" },
  { text: "We must be willing to let go of the life we planned to have the life that is waiting for us.", author: "Joseph Campbell" },
  { text: "To live is to suffer, to survive is to find meaning in the suffering.", author: "Friedrich Nietzsche" },
  { text: "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.", author: "Sylvia Plath" },
  { text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.", author: "Albert Einstein" },
  { text: "Once you choose hope, anything is possible.", author: "Christopher Reeve" },
  { text: "Efforts and courage are not enough without purpose and direction.", author: "John F. Kennedy" },
];

const SELECTORS = [
  '[data-splash-headline-option]',
  '[class*="tagline"]',
  '[class*="subtitle"]',
  '[class*="greeting"]',
  '[data-testid*="tagline"]',
  '[data-testid*="subtitle"]',
];

const FADE_MS = 300;
const MAX_QUOTE_LEN = 120;

// ── Time formatting ────────────────────────────────────────────────────────────

function timeParts() {
  const now = new Date();
  const hours = now.getHours();
  return { h: hours % 12 || 12, m: now.getMinutes(), period: hours >= 12 ? 'PM' : 'AM' };
}

function formatDigitalTime() {
  const { h, m, period } = timeParts();
  return `${h}:${String(m).padStart(2, '0')} ${period}`;
}

const ONES = [
  '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
  'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
];
const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty'];

function minuteWords(m) {
  if (m === 0) return '';
  if (m < 10) return `Oh ${ONES[m]}`;
  if (m < 20) return ONES[m];
  const o = m % 10;
  return o === 0 ? TENS[Math.floor(m / 10)] : `${TENS[Math.floor(m / 10)]} ${ONES[o]}`;
}

function formatLiteraryTime() {
  const { h, m, period } = timeParts();
  const min = minuteWords(m);
  return min ? `${ONES[h]} ${min} ${period}` : `${ONES[h]} ${period}`;
}

// ── Quote fetching ─────────────────────────────────────────────────────────────

function randomFallback() {
  return FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
}

async function fetchQuote() {
  const fetchers = [
    async () => {
      const r = await fetch('https://stoic.tekloon.net/stoic-quote');
      const d = await r.json();
      const text = d.data?.quote || d.quote;
      if (!text || text.length > MAX_QUOTE_LEN) throw new Error('unusable');
      return { text, author: d.data?.author || d.author || '' };
    },
    async () => {
      const r = await fetch('https://thequoteshub.com/api/');
      const d = await r.json();
      const entry = Array.isArray(d) ? d[0] : d;
      const text = entry?.quote || entry?.content || entry?.text;
      if (!text || text.length > MAX_QUOTE_LEN) throw new Error('unusable');
      return { text, author: entry?.author || entry?.originator?.name || '' };
    },
  ];

  const idx = Math.random() < 0.5 ? 0 : 1;
  for (let i = 0; i < 2; i++) {
    try { return await fetchers[(idx + i) % 2](); } catch (_) {}
  }
  return randomFallback();
}

async function getQuote() {
  const { cachedQuote } = await chrome.storage.local.get({ cachedQuote: null });

  if (cachedQuote) {
    fetchQuote().then(q => chrome.storage.local.set({ cachedQuote: q })).catch(() => {});
    return cachedQuote;
  }

  const q = await fetchQuote().catch(() => null);
  if (q) chrome.storage.local.set({ cachedQuote: q });
  return q ?? randomFallback();
}

// ── DOM helpers ────────────────────────────────────────────────────────────────

function formatContent(c) {
  return c.raw ? c.text : `"${c.text}"`;
}


function findTarget() {
  for (const sel of SELECTORS) {
    for (const el of document.querySelectorAll(sel)) {
      const text = el.innerText?.trim();
      if (text && text.length < 200 && !el.querySelector('textarea, input, [contenteditable="true"]')) {
        return el;
      }
    }
  }
  return null;
}

function setTextContent(el, full) {
  let target = el;
  while (target.childNodes.length === 1 && target.firstChild.nodeType === Node.ELEMENT_NODE) {
    target = target.firstChild;
  }
  const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);
  if (nodes.length > 0) {
    nodes[0].nodeValue = full;
    for (let i = 1; i < nodes.length; i++) nodes[i].nodeValue = '';
  } else {
    target.textContent = full;
  }
}

function fadeIn(el, c) {
  const text = formatContent(c);
  el.style.transition = 'opacity 0.5s ease';
  el.style.opacity = '0';
  el.style.visibility = '';
  setTextContent(el, text);
  requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = '1'; }));
}

function fadeTo(el, c) {
  const text = formatContent(c);
  el.style.transition = `opacity ${FADE_MS}ms ease`;
  el.style.opacity = '0';
  setTimeout(() => {
    el.style.visibility = '';
    setTextContent(el, text);
    el.style.opacity = '1';
  }, FADE_MS);
}

// ── Session ────────────────────────────────────────────────────────────────────

let stopSession = null;

function startSession(getContent, live) {
  stopSession?.();

  let lastEl = null;
  let fading = false;

  function applyTo(el, c, isNew) {
    lastEl = el;
    if (!c.text) {
      setTextContent(el, '');
      el.style.visibility = 'hidden';
      return;
    }
    if (isNew) {
      fadeIn(el, c);
    } else if (!fading) {
      fading = true;
      fadeTo(el, c);
      setTimeout(() => { fading = false; }, FADE_MS + 400);
    }
  }

  function tick() {
    if (fading) return;
    const el = (lastEl && document.contains(lastEl)) ? lastEl : findTarget();
    if (!el) return;

    const c = getContent();
    if (el !== lastEl) {
      applyTo(el, c, true);
      return;
    }

    const current = el.innerText?.trim() ?? '';
    if (live) {
      if (current !== c.text) setTextContent(el, c.text);
    } else {
      if (current !== formatContent(c)) applyTo(el, c, false);
    }
  }

  const observer = new MutationObserver(tick);
  function attachObserver() {
    observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
  }

  if (document.body) {
    attachObserver();
  } else {
    const bw = new MutationObserver(() => {
      if (document.body) { bw.disconnect(); attachObserver(); }
    });
    bw.observe(document.documentElement, { childList: true });
  }

  let slowInterval;
  const mainInterval = setInterval(tick, live ? 1000 : 200);
  const slowTimeout = live ? null : setTimeout(() => {
    clearInterval(mainInterval);
    slowInterval = setInterval(tick, 2000);
  }, 10000);

  stopSession = () => {
    observer.disconnect();
    clearInterval(mainInterval);
    clearInterval(slowInterval);
    clearTimeout(slowTimeout);
  };
}

// ── Init ───────────────────────────────────────────────────────────────────────

async function init() {
  const { displayMode, customMessage, timeStyle } = await chrome.storage.sync.get({
    displayMode: 'quote',
    customMessage: '',
    timeStyle: 'digital',
  });

  if (displayMode === 'time') {
    const fmt = timeStyle === 'literary' ? formatLiteraryTime : formatDigitalTime;
    startSession(() => ({ text: fmt(), raw: true }), true);
  } else if (displayMode === 'off') {
    startSession(() => ({ text: '', raw: true }), false);
  } else if (displayMode === 'custom') {
    startSession(() => ({ text: customMessage, raw: true }), false);
  } else {
    const q = await getQuote();
    startSession(() => q, false);
  }
}

init();

let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    setTimeout(init, 500);
  }
}).observe(document, { subtree: true, childList: true });
