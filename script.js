window.addEventListener("load", function() {
  document.getElementById("preloader").style.display = "none";
});
const playBtn = document.getElementById("playBtn");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    isPlaying = true;
    playBtn.innerText = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    isPlaying = false;
    playBtn.innerText = "▶ Play Music";
  }
});
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
