{
  const navButton = document.getElementById('nav-open-btn');
  const nav = document.getElementById('phone-nav-content');
  const closeBtn = document.getElementById('close-btn');

  navButton.addEventListener('click', () => {
    nav.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('is-open');
  });
}
