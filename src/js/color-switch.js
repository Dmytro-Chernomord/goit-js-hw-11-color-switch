const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  bodyRef: document.body,
  startBtn: document.querySelector('button[data-action=start]'),
  stopBtn: document.querySelector('button[data-action=stop]'),
};

let timeoutId = null;
let isActive = false;

refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  if (isActive === false) {
    isActive = true;
    timeoutId = setInterval(() => {
      const currentColor = randomIntegerFromInterval(0, colors.length - 1);

      refs.bodyRef.style.background = colors[currentColor];
    }, 1000);
  }
}

function stop() {
  clearInterval(timeoutId);
  isActive = false;
}
