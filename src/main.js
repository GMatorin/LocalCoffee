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
// Call the google maps callback function initMap

function initMap() {
  // Map options
  let options = {
    zoom: 17,
    center: { lat: 40.775199, lng: -73.945009 }
  };
  // New map
  let map = new google.maps.Map(document.getElementById('map'), options);

  // Add marker
  let marker = new google.maps.Marker({
    position: { lat: 40.775199, lng: -73.945009 },
    map: map
  });
}

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
