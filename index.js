const inputEl = document.querySelector("input");
const buttonStart = document.querySelector(".start__button_start");
const buttonReset = document.querySelector(".start__button_reset");

const hour = document.querySelector(".timer__hours");
const min = document.querySelector(".timer__minutes");
const sec = document.querySelector(".timer__seconds");

let timer;

function createTimerAnimator(value) {
  resetInterval();
  cleanInput();

  timer = setInterval(() => {
    if (value == 0) {
      cleanInput();
      resetInterval();
      buttonStart.disabled = false;
      inputEl.disabled = false;
    } else {
      value--;
      let hours = Math.floor(value / 3600);
      let minutes = Math.floor((value - hours * 3600) / 60);
      let seconds = value % 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      hour.textContent = hours;
      min.textContent = minutes;
      sec.textContent = seconds;
    }
  }, 1000);
}

buttonStart.addEventListener("click", (e) => {
  e.preventDefault();
  buttonStart.disabled = true;
  inputEl.disabled = true;
  createTimerAnimator(inputEl.value);
});

buttonReset.addEventListener("click", () => {
  resetInterval();
  buttonStart.disabled = false;
  inputEl.disabled = false;

  inputEl.value = "";
  hour.textContent = "00";
  min.textContent = "00";
  sec.textContent = "00";
});

function resetInterval() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function cleanInput() {
  inputEl.value = "";
}