// ==== MUSIC CONTROL ====

const audio = document.getElementById("bgMusic");
const btnPlay = document.getElementById("playPauseBtn");
const btnReplay = document.getElementById("replayBtn");

btnPlay.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnPlay.textContent = "Pause";
  } else {
    audio.pause();
    btnPlay.textContent = "Play";
  }
});

btnReplay.addEventListener("click", () => {
  if (audio.paused) {
    btnPlay.textContent = "Pause";
  }
  audio.pause();
  audio.currentTime = 0;
  audio.play();
});

// ==== INPUT SEQUENCE & FINAL CARD SHOW/HIDE ====

const nameInput = document.getElementById('inputName');
const feelInput = document.getElementById('inputFeel');
const memoryInput = document.getElementById('inputMemories');
const noteInput = document.getElementById('inputNote');

// all intermediate cards (step 2–4)
const hiddenSteps = document.querySelectorAll('.hiddenDiv:not(#finalCard)');
// final “send” card
const finalCard = document.getElementById('finalCard');

/**
 * Check whether all four text inputs have non-empty values.
 * If yes → show finalCard; otherwise → hide it.
 */
function checkAllFilled() {
  const allFilled = [ nameInput, feelInput, memoryInput, noteInput ]
    .every(input => input.value.trim() !== '');
  
  finalCard.style.display = allFilled ? 'block' : 'none';
}

// 1) When user types their name → show/hide the intermediate steps:
nameInput.addEventListener('input', () => {
  const showSteps = nameInput.value.trim() !== '';
  hiddenSteps.forEach(div => {
    div.style.display = showSteps ? 'block' : 'none';
  });

  // also re-evaluate final card in case name was cleared
  checkAllFilled();
});

// 2) Whenever any of the other three inputs changes → re-check final card:
[ feelInput, memoryInput, noteInput ].forEach(inputEl => {
  inputEl.addEventListener('input', checkAllFilled);
});

// ==== INITIAL STATE ON PAGE LOAD ====
// hide everything except the very first card
// window.addEventListener('DOMContentLoaded', () => {
//   hiddenSteps.forEach(div => div.style.display = 'none');
//   finalCard.style.display = 'none';
//   btnPlay.textContent = 'Play';
// });
