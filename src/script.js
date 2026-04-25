function randomHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(50 + Math.random() * 30);
  const l = Math.floor(45 + Math.random() * 20);
  return { h, s, l };
}

async function getColorName(h, s, l) {
  const res = await fetch(`https://www.thecolorapi.com/id?hsl=hsl(${h},${s}%,${l}%)`);
  const data = await res.json();
  return data.name.value;
}

const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];
let currentDifficulty = 0;

const thumb = document.getElementById('difficultyThumb');
const label = document.getElementById('difficultyLabel');
const dots = document.querySelectorAll('.difficulty-dot');

const THUMB_POSITIONS = [5, 29, 53];

function setDifficulty(index) {
  currentDifficulty = index;
  thumb.style.left = THUMB_POSITIONS[index] + 'px';
  label.textContent = DIFFICULTIES[index];
  dots.forEach((dot, i) => {
    dot.style.opacity = i === index ? '0' : '1';
  });
}

document.getElementById('difficultyTrack').addEventListener('click', () => {
  setDifficulty((currentDifficulty + 1) % 3);
});

requestAnimationFrame(() => setDifficulty(0));