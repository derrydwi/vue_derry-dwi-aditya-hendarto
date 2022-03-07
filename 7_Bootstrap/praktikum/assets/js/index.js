const buttonScroll = document.getElementById('btnScroll');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScroll.classList.remove('d-none');
  } else {
    buttonScroll.classList.add('d-none');
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};
