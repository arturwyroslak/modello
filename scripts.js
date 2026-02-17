// Minimal interactivity: mobile nav toggle and booking form handler
document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click',()=>{ links.classList.toggle('open'); toggle.setAttribute('aria-expanded', links.classList.contains('open'))});

  const form = document.getElementById('bookingForm');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    // lightweight client-side validation
    const name = data.get('name');
    const email = data.get('email');
    if(!name || !email){ alert('Proszę podać imię i email'); return }
    // simulate send
    alert('Dziękujemy — zapytanie wysłane. Odpowiemy w ciągu 24h.');
    form.reset();
  });
});
