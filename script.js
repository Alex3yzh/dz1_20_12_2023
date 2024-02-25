document.addEventListener("DOMContentLoaded", function () {
  let timer;
  let timeLeft;
  let interval;

  const timerForm = document.getElementById("timerForm");
  const stopButton = document.getElementById("stopButton");
  const progressBar = document.getElementById("progress");
  const notification = document.getElementById("notification");

  timerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const timeInput = document.getElementById("timeInput").value;
    startTimer(timeInput);
  });

  stopButton.addEventListener("click", function () {
    stopTimer();
  });

  function startTimer(time) {
    clearInterval(interval);
    timeLeft = time * 60;
    interval = setInterval(updateTimer, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
    updateProgressBar(0);
    notification.innerText = "Timer Stopped";
  }

  function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
      updateProgressBar(
        (1 - timeLeft / (document.getElementById("timeInput").value * 60)) * 100
      );
      if (timeLeft % (document.getElementById("timeInput").value * 60) === 0) {
        notification.innerText = `Time to stretch! You've been working for ${
          document.getElementById("timeInput").value
        } minutes!`;
      }
    } else {
      stopTimer();
    }
  }

  function updateProgressBar(progress) {
    progressBar.style.width = `${progress}%`;
  }
});
