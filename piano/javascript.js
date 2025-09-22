// Frequencies of notes (C4-B4)
const notes = {
  "C": 261.63,
  "D": 293.66,
  "E": 329.63,
  "F": 349.23,
  "G": 392.00,
  "A": 440.00,
  "B": 493.88
};

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = "sine"; // can be "square", "triangle", "sawtooth"
  oscillator.frequency.value = frequency;

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  // stop after 0.5s
  oscillator.stop(audioCtx.currentTime + 0.5);
}

// Add click event to buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const note = btn.dataset.note;
    playSound(notes[note]);
  });
});

// Optional: Play with keyboard keys
document.addEventListener("keydown", e => {
  const keyMap = {
    "a": "C",
    "s": "D",
    "d": "E",
    "f": "F",
    "g": "G",
    "h": "A",
    "j": "B"
  };
  const note = keyMap[e.key];
  if (note) {
    playSound(notes[note]);
    document.querySelector(`[data-note='${note}']`).classList.add("active");
  }
});

document.addEventListener("keyup", e => {
  document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
});
