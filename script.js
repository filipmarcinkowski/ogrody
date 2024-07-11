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

// imageBox.forEach(function (i) {
//   i.addEventListener('click', function () {
//     imageBox.forEach(function (box) {
//       box.classList.remove('full-size');
//     });
//     i.classList.add('full-size');
//   });
// });

const hideImage = function (box) {
  const imageDesc = box.querySelector('.image-desc__desc');
  box.classList.remove('full-size');
  imageDesc.classList.remove('show__desc');
};

const showImage = function (i) {
  const imageDesc = i.querySelector('.image-desc__desc');
  const findImage = function () {
    imageBox.forEach(hideImage);
    i.classList.add('full-size');
    imageDesc.classList.add('show__desc');
  };
  i.addEventListener('click', findImage);
};

imageBox.forEach(showImage);

// OFFER DESCRIPTION OPEN / CLOSE FUNCTIONALITY

const showDesc = function (i) {
  const showOffer = i.querySelector('.offer-more');
  const offerIconClose1 = i.querySelector('.cross-1');
  const offerIconClose2 = i.querySelector('.cross-2');
  const offerDesc = i.querySelector('.offer-more__desc');

  const showDescExtras = function () {
    showOffer.classList.toggle('offer-open');
    offerIconClose1.classList.toggle('cross-1__close');
    offerIconClose2.classList.toggle('cross-2__close');
    offerDesc.classList.toggle('add-padding');
  };

  i.addEventListener('click', showDescExtras);
};

offerBox.forEach(showDesc);

// MOBILE NAVIGATION

const btnBox = document.querySelector('.btn__mobile-nav');
const mobileNav = document.querySelector('.nav');
const body = document.querySelector('.body');
const navList = document.querySelector('.nav__list');

btnBox.addEventListener('click', function () {
  mobileNav.classList.toggle('show__menu');
  body.classList.toggle('show__menu-b');
  navList.classList.toggle('show__nav-list');
  // if (mobileNav.classList.contains('show__menu')) {
  // }
});
