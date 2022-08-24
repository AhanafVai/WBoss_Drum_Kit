// ? Playing sounds

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

// ?Removing effect
const removeEffect = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = document
  .querySelectorAll(".key")
  .forEach((key) => key.addEventListener("transitionend", removeEffect));
window.addEventListener("keydown", playSound);
