# Quoty

Quoty is a browser extension that displays an inspiring or thought-provoking quote each time you visit ChatGPT.

With animated character-by-character text rendering, Quoty brings quotes to life right on your browser, while integrating seamlessly with the original ChatGPT experience.

## Features 🚀

- **Dynamic Quotes:** Fetches random quotes from [QuoteSlate API](https://quoteslate.vercel.app) to provide fresh content on each page load.
- **Animated Text:** Displays each quote character-by-character, creating a smooth, engaging animation.
- **Seamless Integration:** Works with ChatGPT's modern, single-page app design, refreshing quotes without reloading the page.
- **Minimalist Design:** Fits right into the ChatGPT interface, adding a touch of inspiration without cluttering the screen.

## Installation 🛠️

1. Clone or download this repository.
2. Go to `chrome://extensions/` in your browser.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the directory where you saved Quoty.
5. Quoty will now be active in your browser.

## How It Works 🧠

1. **Fetch a Quote:** Quoty sends a request to the QuoteSlate API to get a new quote each time the page loads.
2. **Animate Text Display:** Using `animateText`, Quoty displays the fetched quote character-by-character, creating a smooth animation.
3. **Refresh on URL Change:** A MutationObserver checks for URL changes to display a new quote without refreshing the page, making it ideal for modern, single-page apps.

## Contributing 🤝

1. Fork this repository.
2. Create a new branch for your feature (`git checkout -b feature-Name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-Name`).
5. Create a pull request.