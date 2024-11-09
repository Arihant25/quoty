// Function to animate text character by character
function animateText(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => animateText(element, text, index + 1), 20);
    }
}

// Fetch the quote from the API and display it with animation
function fetchAndDisplayQuote() {
    fetch('https://quoteslate.vercel.app/api/quotes/random')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                const quoteText = data.quote;

                // Remove the original streaming elements
                const originalStreamingElements = document.querySelectorAll('.result-streaming');
                originalStreamingElements.forEach(el => el.remove());

                // Find the main h1 and update it
                const header = document.querySelector('h1');
                if (header) {
                    header.textContent = ''; // Clear existing text
                    animateText(header, quoteText);
                }
                console.log(data);
            }, 2500);
        })
        .catch(console.error);
}

// Run when the page loads
fetchAndDisplayQuote();

// Also run when URL changes (for single-page app navigation)
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        fetchAndDisplayQuote();
    }
}).observe(document, { subtree: true, childList: true });