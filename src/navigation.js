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
    const homeTitle = document.title;
    const showRoute = () => {
      const target = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      const page = target && target.classList.contains('resource-page') ? target : null;
      document.title = page ? page.dataset.title + ' — Partnership Behavior Group' : homeTitle;
      document.querySelectorAll('.nav-dropdown a').forEach(link => {
        if (page && link.getAttribute('href') === '#' + page.id) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('open'); item.querySelector('.nav-trigger').setAttribute('aria-expanded','false');
      });
      if (page) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        page.querySelector('h1').focus({ preventScroll: true });
      } else if (target) {
        target.scrollIntoView({ behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', showRoute);
    if (location.hash) showRoute();
