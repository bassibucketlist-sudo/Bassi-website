document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeModal');
  const serviceEls = document.querySelectorAll('.btn-book');
  const modalServiceName = document.getElementById('modalServiceName');
  const formServiceInput = document.getElementById('formServiceInput');

  function openModalFor(serviceName){
    modal.setAttribute('aria-hidden','false');
    modal.style.display = 'flex';
    modalServiceName.textContent = 'Service: ' + serviceName;
    if(formServiceInput) formServiceInput.value = serviceName;
    setTimeout(()=> {
      const first = modal.querySelector('input[name="name"]');
      if(first) first.focus();
    }, 120);
  }

  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modal.style.display = 'none';
  }

  serviceEls.forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      const service = b.dataset.service || b.closest('.service-card')?.dataset.service || 'Service';
      openModalFor(service);
    });
  });

  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if(e.target === modal) closeModal();
  });

  const bookingForm = document.getElementById('bookingForm');
  if(bookingForm){
    bookingForm.addEventListener('submit', (e) => {
      // allow normal POST to Formspree; the page will redirect as Formspree is configured
      setTimeout(()=> { closeModal(); }, 250);
    });
  }
});
