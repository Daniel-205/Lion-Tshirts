// main.js
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease'
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const isDark = localStorage.getItem('theme') === 'dark' ||
                 (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.body.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    document.body.toggleAttribute('data-theme', 'dark');
    localStorage.setItem('theme', document.body.hasAttribute('data-theme') ? 'dark' : 'light');
  });

  // // Mobile Menu
  // const hamburger = document.getElementById('hamburger');
  // const navMenu = document.getElementById('nav-menu');

  // hamburger.addEventListener('click', () => {
  //   hamburger.classList.toggle('change');
  //   navMenu.classList.toggle('active');
  // });

  // // Close menu on link click
  // document.querySelectorAll('.nav-link').forEach(link => {
  //   link.addEventListener('click', () => {
  //     hamburger.classList.remove('active');
  //     navMenu.classList.remove('active');
  //   });
  // });
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Prevent clicks inside menu from closing it
  navMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Toggle hamburger and menu
  hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    hamburger.classList.toggle('change');
    navMenu.classList.toggle('active');
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('change');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      hamburger.classList.remove('change');
      navMenu.classList.remove('active');
    }
  });

});