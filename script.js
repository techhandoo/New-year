// Countdown logic
const countdown = document.getElementById("countdown");
const newYearMessage = document.getElementById("newYearMessage");
const sparkleBackground = document.createElement('div'); // To hold sparkles
sparkleBackground.id = 'sparkle-background'; // Adding an ID for styling
document.body.appendChild(sparkleBackground); // Append it to the body

// Function to generate random sparkles
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.animationDuration = `${Math.random() * 1 + 1}s`;
  sparkle.style.animationDelay = `${Math.random() * 2}s`;
  sparkleBackground.appendChild(sparkle);
}

// Countdown update function
function updateCountdown() {
  const now = new Date();
  const newYear = new Date("2024-12-31T18:30:00.000Z"); // IST time (12:00 AM)
  const timeDifference = newYear - now;

  if (timeDifference <= 0) {
    countdown.style.display = "none";
    newYearMessage.classList.remove("hidden");

    // Start sparkle effect when the countdown ends
    setInterval(createSparkle, 100); // Create sparkles every 100ms
    document.getElementById('playButton2').classList.remove('hidden'); // Show the New Year music play button
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown
updateCountdown();

// Audio control
const countdownAudio = document.getElementById('countdownAudio');
const newYearAudio = document.getElementById('newYearAudio');
const playButton1 = document.getElementById('playButton1');
const playButton2 = document.getElementById('playButton2');

// Play countdown music
playButton1.addEventListener('click', () => {
  countdownAudio.muted = false;
  countdownAudio.play();
  playButton1.disabled = true;
});

// Play New Year music
playButton2.addEventListener('click', () => {
  newYearAudio.muted = false;
  newYearAudio.play();
  playButton2.disabled = true;
});
