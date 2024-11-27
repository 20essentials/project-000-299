document.addEventListener('click', e => {
  if (e.target.matches('.side')) {
    e.target.closest('.pyramid').classList.toggle('pausa');
  }
});

const pyramidsHTML = Array.from({ length: 50 }, (_, i) => {
  const odd = 2 * i - 1;
  const integer = i;
  return `
    <div style="--x-odd: ${odd}" class="pyramid pyramid-top">
      <div class="side side-front"></div>
      <div class="side side-right"></div>
      <div class="side side-left"></div>
      <div class="side side-bottom"></div>
    </div>
    <div style="--x-even: ${integer}" class="pyramid pyramid-bottom">
      <div class="side side-front"></div>
      <div class="side side-right"></div>
      <div class="side side-left"></div>
      <div class="side side-bottom"></div>
    </div>
  `;
}).join('');

const rows = document.querySelectorAll('.row');
rows.forEach(row => (row.innerHTML = pyramidsHTML));
