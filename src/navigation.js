const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    mobileToggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', String(opened));
      mobileToggle.setAttribute('aria-label', opened ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('mobile-open'); mobileToggle.setAttribute('aria-expanded', 'false'); mobileToggle.setAttribute('aria-label', 'Open menu'); }));
    document.querySelectorAll('.nav-trigger').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.nav-item');
        const opened = item.classList.toggle('open');
        button.setAttribute('aria-expanded', String(opened));
        document.querySelectorAll('.nav-item').forEach(other => {
          if (other !== item) { other.classList.remove('open'); other.querySelector('.nav-trigger').setAttribute('aria-expanded','false'); }
        });
      });
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.nav-item')) document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('open'); item.querySelector('.nav-trigger').setAttribute('aria-expanded','false');
      });
    });
