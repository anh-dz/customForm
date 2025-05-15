const audio = document.getElementById("bgMusic");
const btn_music = document.getElementById("playPauseBtn");
const btn_replay = document.getElementById("replayBtn");

btn_music.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn_music.textContent = "Pause";
  } else {
    audio.pause();
    btn_music.textContent = "Start";
  }
});

btn_replay.addEventListener("click", () => {
  if (audio.paused) {
    btn_music.textContent = "Pause";
  }
  audio.pause();
  audio.currentTime = 0;
  audio.play();
});