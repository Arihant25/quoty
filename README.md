# <img src="images/128.png" alt="Quoty logo" width="32" height="32"> Quoty

Replace the quote on your ChatGPT home screen with a fresh quote, the current time, or your own message.

[Install from the Chrome Web Store](https://chromewebstore.google.com/detail/quoty/napjbhgffnpcdaebebhnoiffjgeegbed)

---

## Features

- **Zero latency**: Quotes are pre-fetched in the background on your previous visit. By the time ChatGPT loads, the content is already cached and ready.
- **Smart filtering**: Quotes over 120 characters are automatically skipped and a fresh one is fetched instead. What appears is always concise.
- **Literary time**: Display the time written out in words: *Three Forty Seven PM*. Or keep it digital.
- **Full control**: Type a custom message, leave it empty to hide the area entirely, or switch the extension off completely.
- **Resilient**: Falls back to a curated set of 60 quotes if the APIs are unavailable.

---

## Modes

| Mode | What it shows |
|------|--------------|
| **Quote** | A fresh inspirational quote fetched from the web, cached for instant display |
| **Time · Literary** | Current time written in words — *Three Forty Seven PM* |
| **Time · Digital** | Current time in digital format — *3:47 PM* |
| **Message** | Any text you type. Leave empty to hide the display area entirely. |
| **Off** | Removes the quote area from the page completely |

---

## Manual Installation

1. [Download or clone this repository](https://github.com/Arihant25/quoty)
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked** and select the repository folder
5. Open [chatgpt.com](https://chatgpt.com) — the extension is active

To configure, click the extension icon in your toolbar.

---

## How It Works

The content script runs at `document_start` on ChatGPT pages and waits for the quote element to appear in the DOM. When found, it replaces the text and applies a fade transition. A `MutationObserver` re-asserts the replacement if React re-renders the element.

Quotes are fetched from two public APIs ([stoic.tekloon.net](https://stoic.tekloon.net/stoic-quote) and [thequoteshub.com](https://thequoteshub.com/api/)) and cached in `chrome.storage.local`. On each page load, the cached quote is shown immediately while a new one is fetched silently in the background for the next visit.

---

## License

MIT
