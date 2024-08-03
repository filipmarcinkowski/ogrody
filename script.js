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
const btnBox = document.querySelector('.btn__mobile-nav');
const body = document.querySelector('.body');
const navList = document.querySelector('.nav__list');
const addBg = document.querySelector('.mobile__nav-background');
const iconOpen = document.querySelector('.menu-open');
const iconClose = document.querySelector('.menu-close');
const linkSection = document.querySelectorAll('.nav__link');

// WINDOW RESIZING
const resolution = function () {
  if (
    navList.classList.contains('show__nav-list') &&
    window.innerWidth > 1024
  ) {
    body.style.marginRight = '';
  } else if (
    navList.classList.contains('show__nav-list') &&
    window.innerWidth <= 1024
  ) {
    body.style.marginRight = '4.2rem';
  }
};

window.onresize = resolution;

// REALIZATIONS images OPEN / CLOSE FUNCTIONALITY
const hideImage = function (box) {
  const imageNum = box.querySelector('.image-desc__num');
  const imageDesc = box.querySelector('.image-desc__desc');
  box.classList.remove('full-size');
  imageNum.classList.remove('num-size');
  imageDesc.classList.remove('show__desc');
};

const showImage = function (i) {
  const imageNum = i.querySelector('.image-desc__num');
  const imageDesc = i.querySelector('.image-desc__desc');
  const findImage = function () {
    imageBox.forEach(hideImage);

    i.classList.add('full-size');
    imageNum.classList.add('num-size');
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

const isOpen = function () {
  if (iconClose.classList.contains('hidden')) {
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
  } else {
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }
};

const openMobileMenu = function () {
  body.classList.add('show__menu-b');
  navList.classList.add('show__nav-list');
  addBg.classList.add('show__menu');
  body.style.marginRight = '4.2rem';

  isOpen();
};
const closeMobileMenu = function () {
  body.classList.remove('show__menu-b');
  navList.classList.remove('show__nav-list');
  addBg.classList.remove('show__menu');
  body.style.marginRight = '';
  isOpen();
};

const mobileMenu = function () {
  if (navList.classList.contains('show__nav-list')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
};

const goToLink = function (i) {
  i.addEventListener('click', function () {
    if (navList.classList.contains('show__nav-list')) {
      closeMobileMenu();
    }
  });
};

linkSection.forEach(goToLink);

btnBox.addEventListener('click', mobileMenu);
// /////////////////////////////////////////////////
// test
