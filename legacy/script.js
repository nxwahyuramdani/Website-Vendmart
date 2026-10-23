const header=document.getElementById('header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30));
const menu=document.getElementById('menu'),burger=document.getElementById('burger');
burger.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('.chip').forEach(chip=>chip.addEventListener('click',()=>{
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  const f=chip.dataset.filter;
  document.querySelectorAll('.machine').forEach(m=>m.classList.toggle('hide',f!=='all'&&m.dataset.type!==f));
}));

const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  const el=e.target,t=+el.dataset.count;let n=0;
  const step=()=>{n+=Math.ceil(t/60);if(n>=t){el.textContent=t+'+';return}el.textContent=n;requestAnimationFrame(step)};
  step();co.unobserve(el);
}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(c=>co.observe(c));

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.target);
  const msg='Halo VendMart, saya '+d.get('nama')+' ('+d.get('email')+'). Minat: '+d.get('minat')+'. '+d.get('pesan');
  const t=document.getElementById('toast');t.classList.add('show');
  setTimeout(()=>{t.classList.remove('show');window.open('https://wa.me/6285212238881?text='+encodeURIComponent(msg),'_blank')},1400);
  e.target.reset();
});
document.getElementById('year').textContent=new Date().getFullYear();