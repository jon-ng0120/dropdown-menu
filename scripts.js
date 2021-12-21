'use strict';

const menu = document.querySelector('#menu');
const navBar = document.querySelector('#nav-bar');
const closeMenuBtn = document.querySelector('#close-menu');
const overlay = document.querySelector('#overlay');

window.addEventListener('resize', () => {
  const servicesCheck = document.querySelector('#toggle-services');
  if (window.innerWidth >= 768) {
    navBar.classList.remove('active-menu');
    if (servicesCheck.checked) servicesCheck.checked = false;
    servicesCheck.disabled = true;
    overlay.classList.remove('active-overlay');
  } else {
    servicesCheck.disabled = false;
  }
});

menu.addEventListener('click', () => {
  overlay.classList.toggle('active-overlay');
  navBar.classList.toggle('active-menu');
});

const closeNav = () => {
  const servicesCheck = document.querySelector('#toggle-services');
  navBar.classList.toggle('active-menu');
  overlay.classList.toggle('active-overlay');
  if (servicesCheck.checked) servicesCheck.checked = false;
};

closeMenuBtn.addEventListener('click', () => closeNav());
overlay.addEventListener('click', () => closeNav());
