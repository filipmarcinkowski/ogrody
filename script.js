'use strict';
const title = document.querySelector('.hero__title-inner');
const btnContact = document.querySelector('.contact-box');

const changeToWhite = function () {
  title.style.color = 'var(--clr-white-900)';
};
const changeToYellow = function () {
  title.style.color = 'var(--clr-secondary-1)';
};

btnContact.addEventListener('mouseover', changeToWhite);
btnContact.addEventListener('mouseout', changeToYellow);
