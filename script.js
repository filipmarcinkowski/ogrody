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
const offerBox = document.querySelectorAll('.offer-item__container');

imageBox.forEach(function (i) {
  i.addEventListener('click', function () {
    imageBox.forEach(function (box) {
      box.classList.remove('full-size');
    });
    i.classList.add('full-size');
  });
});

// OFFER DESCRIPTION OPEN / CLOSE FUNCTIONALITY

offerBox.forEach(function (i) {
  const showOffer = i.querySelector('.offer-more');
  const offerIconClose1 = i.querySelector('.cross-1');
  const offerIconClose2 = i.querySelector('.cross-2');
  const offerDesc = i.querySelector('.offer-more__desc');
  i.addEventListener('click', function () {
    showOffer.classList.toggle('offer-open');
    offerIconClose1.classList.toggle('cross-1__close');
    offerIconClose2.classList.toggle('cross-2__close');
    offerDesc.classList.toggle('add-padding');
  });
});
