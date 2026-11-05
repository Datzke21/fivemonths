// PERSONALIZE THIS PAGE: edit the name and message below.
const girlfriendName = "my beautiful love";
const loveMessage = `Happy Monthsary, ${girlfriendName}!

I just want you to know how thankful I am to have you in my life. You make ordinary days feel special just by being part of them. Your smile is my favorite view, your hugs are my comfort, and every moment with you is a memory I want to keep.

I know we are not perfect, and there will be days when things are not easy. But I promise to keep understanding you, supporting you, making you smile, and choosing us. I don't need a perfect love story. I just want a real one with you.

Thank you for being you. Here's to more laughter, more adventures, more hugs, and many more monthsaries together.

I love you so much!`;

const messageElement = document.getElementById("typedMessage");
const replayButton = document.getElementById("replayMessage");
const music = document.getElementById("ourSong");
const musicButton = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");
const heartsContainer = document.getElementById("hearts");

let typingTimer;
function typeLoveMessage() {
  clearInterval(typingTimer);
  messageElement.textContent = "";
  let i = 0;
  typingTimer = setInterval(() => {
    messageElement.textContent += loveMessage.charAt(i);
    i++;
    if (i >= loveMessage.length) clearInterval(typingTimer);
  }, 24);
}
typeLoveMessage();
replayButton.addEventListener("click", typeLoveMessage);

// Music begins only after the visitor presses the button (browser autoplay rules).
musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.classList.add("is-playing");
      musicLabel.textContent = "Pause our song";
    } catch (error) {
      alert("Please add an MP3 named 'our-song.mp3' beside index.html, then try again.");
    }
  } else {
    music.pause();
    musicButton.classList.remove("is-playing");
    musicLabel.textContent = "Play our song";
  }
});

// Floating hearts in the background.
function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "heart-particle";
  heart.textContent = ["♥", "♡", "❤", "ღ"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (13 + Math.random() * 23) + "px";
  const duration = 8 + Math.random() * 8;
  heart.style.animationDuration = duration + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(makeHeart, 420);

// Fade content into view as the page scrolls.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(item => observer.observe(item));

document.querySelector(".back-link").addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
