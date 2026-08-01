const text='Te amo, Kari. Desde un 7 de marzo de 2026 mi vida cambió para mejor. Gracias por cada sonrisa, cada abrazo y cada momento. Prometo seguir eligiéndote todos los días. Te amo hoy, mañana y siempre. ❤️';
let i=0;

function type(){
  if(i<text.length){
    letter.textContent+=text[i++];
    setTimeout(type,35)
  }
}

title.textContent='Una carta para ti';
type();

// Contador de tiempo dinámico
const start = new Date(2026, 4, 7); 

function tick() {
  const now = new Date();
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let totalMonths = (years * 12) + months;

  counter.textContent = `Juntos desde marzo de 2026 • ${totalMonths} meses y ${days} días ❤️`;
}

tick();
setInterval(tick,60000);

function toggleMusic(){
  const m=music;
  m.paused?m.play():m.pause()
}

for(let n=0;n<40;n++){
  let s=document.createElement('span');
  s.textContent='❤';
  s.style.left=Math.random()*100+'vw';
  s.style.animationDelay=(Math.random()*8)+'s';
  s.style.fontSize=(16+Math.random()*24)+'px';
  hearts.appendChild(s);
}
