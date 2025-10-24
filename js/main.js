// Enhanced interactivity and animations
document.addEventListener('DOMContentLoaded', function(){
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  const waves = document.querySelector('.wave-group');
  
  window.addEventListener('scroll', () => {
    if(hero) {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      waves.style.transform = `translate3d(0,${rate}px,0)`;
      hero.style.backgroundPosition = `center ${-rate * 0.2}px`;
    }
  });

  // Mouse movement effect for hero
  document.addEventListener('mousemove', (e) => {
    if(hero) {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
    }
  });

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.project-card, .service').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Enhanced nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.style.display = expanded ? 'none' : 'block';
      if(!expanded) {
        siteNav.style.opacity = '0';
        requestAnimationFrame(() => {
          siteNav.style.transition = 'opacity 0.3s ease';
          siteNav.style.opacity = '1';
        });
      }
    });
  }

  // project modal
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');

  function openModal(title, desc){
    if(!modal) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    if(!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      openModal(card.dataset.title, card.dataset.description);
    });
    card.addEventListener('keypress', (e)=>{
      if(e.key === 'Enter' || e.key === ' ') openModal(card.dataset.title, card.dataset.description);
    })
  });

  if(modalClose) modalClose.addEventListener('click', closeModal);
  if(modal) modal.addEventListener('click', (ev)=>{
    if(ev.target === modal) closeModal();
  });
});
