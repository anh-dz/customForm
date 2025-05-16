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
