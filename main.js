const navButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const links = nav.querySelectorAll('a');
const coffeeImages = document
  .querySelector('.menu-coffee-images')
  .querySelectorAll('img, figcaption');
const mealsImages = document
  .querySelector('.menu-meals-images')
  .querySelectorAll('img, figcaption');
const coffeeFigs = document
  .querySelector('.menu-coffee-images')
  .querySelectorAll('figure');
const mealsFigs = document
  .querySelector('.menu-meals-images')
  .querySelectorAll('figure');

coffeeImages.forEach(coffeeImage =>
  coffeeImage.addEventListener('click', activateCoffeeImage)
);
mealsImages.forEach(mealsImage =>
  mealsImage.addEventListener('click', activateMealsImage)
);

links.forEach(link => link.addEventListener('click', navHandle));
navButton.addEventListener('click', navHandle);

function navHandle() {
  body.classList.toggle('nav-is-open');
  nav.classList.toggle('hide-nav');
  navButton.classList.toggle('close');
}

function activateCoffeeImage() {
  coffeeFigs.forEach(coffeeFig =>
    coffeeFig.classList.remove('coffee-fig-active')
  );

  this.parentElement.classList.add('coffee-fig-active');
}

function activateMealsImage() {
  mealsFigs.forEach(mealsFig => mealsFig.classList.remove('meal-fig-active'));

  this.parentElement.classList.add('meal-fig-active');
}
