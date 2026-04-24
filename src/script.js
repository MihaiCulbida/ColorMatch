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

async function init() {
  const { h, s, l } = randomHSL();

  const box = document.querySelector('.box');
  box.style.background = `hsl(${h}, ${s}%, ${l}%)`;

  const name = await getColorName(h, s, l);
  box.textContent = name;
}

init();