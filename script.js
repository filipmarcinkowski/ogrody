'use strict';
// const title = document.querySelector('.hero__title-inner');
// const btnContact = document.querySelector('.contact-box');

// const changeToWhite = function () {
//   title.style.color = 'var(--clr-white-900)';
// };
// const changeToYellow = function () {
//   title.style.color = 'var(--clr-secondary-1)';
// };

// btnContact.addEventListener('mouseover', changeToWhite);
// btnContact.addEventListener('mouseout', changeToYellow);

const imageBox = document.querySelectorAll('.image-box');

imageBox.forEach(function (i) {
  i.addEventListener('click', function () {
    imageBox.forEach(function (box) {
      box.classList.remove('full-size');
    });
    i.classList.add('full-size');
  });
});
