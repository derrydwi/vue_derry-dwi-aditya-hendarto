const bars = document.querySelector('.bars');
const navLink = document.querySelector('.nav-link');

bars.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
