'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const loadAnimation = () => {
    const tl = gsap.timeline( { duration: 0.75 } );

    tl.from('.hero__title', { opacity: 0, y: 40 }, 0)
    .from('.hero__btn', { opacity: 0, y: 40 }, 0)
    .from('.hero__descr', { opacity: 0 }, 1)
    .staggerFrom('.photos-wrap img', 0.4, { scale: 0.9, opacity: 0 }, 0.2)
    .from('.photos__author', { opacity: 0 }, 2)
  };

  const burgerAnimation = () => {
    const openMenu = document.querySelector('.burger');
    const closeMenu = document.querySelector('.close');
    const menu = document.querySelector('.menu');

    const tl = gsap.timeline({
      paused: true,
      onStart: () => menu.classList.add('menu--open'),
      onReverseComplete: () => menu.classList.remove('menu--open'),
    });

    tl.from('.menu', { y: 10, opacity: 0, duration: 0.5 }, 0)
    .from('.menu__left', { y: 10, opacity: 0, duration: 0.5 }, 0)
    .from('.menu__right', { y: 10, opacity: 0, duration: 0.5 } , 0.5)
    .from('.social', { y: 10, opacity: 0, duration: 0.5 }, 0.5)

    openMenu.addEventListener('click', () => tl.play());
    closeMenu.addEventListener('click', () => tl.reverse());
  };

  loadAnimation();
  burgerAnimation();
});
