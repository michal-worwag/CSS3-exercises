const header = document.querySelector('.sticky-header');
const body = document.querySelector('body');
const html = document.querySelector('html');
const h1 = document.querySelector('h1');
const smallH1 = document.querySelectorAll('.smallH1');

window.onscroll =

function smallerHeader() {
  if (body.scrollTop > 200 || html.scrollTop > 200 ) {
    header.classList.add('smallHeader');
    for (let i=0; i < smallH1.length; i++) {
      smallH1[i].classList.add('hiddenSmall');
    }

  } else {
    header.classList.remove('smallHeader')
    for (let i=0; i < smallH1.length; i++) {
      smallH1[i].classList.remove('hiddenSmall');
    }
  }
}