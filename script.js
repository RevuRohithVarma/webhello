function startRedirect() {
  const overlay = document.getElementById("redirectOverlay");
  const countEl = document.getElementById("count");

  overlay.classList.remove("hidden");

  let timeLeft = 5;
  countEl.textContent = timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    countEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      goToChallenge();
    }
  }, 1000);
}

function goToChallenge() {
  window.location.href = "challenge.html";
}
