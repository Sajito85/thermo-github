// Highlight active nav link (works inside /preview/)
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.site-nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
      a.classList.add('active');
    }
  });
})();

// Reveal on scroll
(function(){
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  els.forEach(el=>io.observe(el));
})();
