const quotes = [
    "You are my today and all of my tomorrows. 💞",
    "I love you more than words can show. 💕",
    "Every day with you is a beautiful adventure. 🌷",
    "You are the reason my heart smiles. 💖",
    "With you, everything feels right. 💘",
    "You make my world bloom like spring. 🌸"
];

function showQuote() {
    // Show a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;

    // Create floating hearts
    createHearts(50); // number of hearts per click
}

function createHearts(count) {
    const heartsContainer = document.querySelector('.hearts');

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');

        // Random heart emoji
        const emojis = ['💖','💗','💘','💕','💞','💓','💝'];
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // Randomize position and size
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 80 + '%';
        heart.style.fontSize = 15 + Math.random() * 20 + 'px';
        heart.style.animationDuration = 3 + Math.random() * 3 + 's';
        heart.style.animationDelay = '0s';

        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => heart.remove(), 5000);
    }
}

function toggleEnvelope(element) {
    element.classList.toggle('open');
}

// Countdown Timer Setup
const countdownDate = new Date("2025-11-12T00:00:00").getTime();
 //  const countdownDate = new Date(new Date().getTime() - 5000).getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        document.getElementById("countdown-timer").innerHTML = "Happy Monthsary! 💖, I won't be saying much Just enough to let you know how much I love you, I hope you like this little Gift of mine ";
        clearInterval(countdownInterval);
        alert("🎉 Happy Monthsary, Baby!! 🎉"); // Popup message
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
