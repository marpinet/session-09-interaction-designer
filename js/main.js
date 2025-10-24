// Small interactivity: nav toggle and project modal
document.addEventListener('DOMContentLoaded', function(){
  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.style.display = expanded ? 'none' : 'block';
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
