'use strict';
import {
  displayAllMovies,
  displayInfoAboutMovie,
  showOrHideErrorMessage,
} from './ui.js';

import {
  validateName,
  validateAge,
  validateEmail,
  validatePassword,
  validateRePassword,
  validatePhone,
} from './validation.js';

const categoriesList = $('aside li').not('aside li:last-child');

getMoviesData();

$('.contact input').change(function () {
  // Validate Name
  showOrHideErrorMessage(this, validateName, 'name');
  // Validate Email
  showOrHideErrorMessage(this, validateEmail, 'email');
  // Validate phone
  showOrHideErrorMessage(this, validatePhone, 'phone');
  // Validate age
  showOrHideErrorMessage(this, validateAge, 'age');
  // Validate Password
  showOrHideErrorMessage(this, validatePassword, 'password');
  // Confirm Password
  if (
    $(this)[0] === $('#password-check')[0] ||
    $(this)[0] === $('#password')[0]
  ) {
    if (!validateRePassword()) {
      $(`#password-check + p`).removeClass('d-none');
    } else {
      $(`#password-check + p`).addClass('d-none');
    }
  }
  if (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateAge() &&
    validatePassword() &&
    validateRePassword()
  ) {
    $('button').removeAttr('disabled');
  } else {
    $('button').attr('disabled', '');
  }
});

// Styles on any input blur or focus
$('input').blur(function () {
  $(this).removeClass('focus-input');
  $(this).addClass('blur-input');
});

$('input').focus(function () {
  $(this).removeClass('blur-input');
  $(this).addClass('focus-input');
});

async function getMoviesData(category = 'now_playing', search) {
  let apiURL;
  if (!search) {
    apiURL =
      category === 'trending'
        ? 'https://api.themoviedb.org/3/trending/all/day?api_key=5596ae0d9cafda4927ee0cb440e895bd'
        : `https://api.themoviedb.org/3/movie/${category}?api_key=5596ae0d9cafda4927ee0cb440e895bd&language=en-US&page=1`;
  } else {
    apiURL = `
    https://api.themoviedb.org/3/search/movie?api_key=5596ae0d9cafda4927ee0cb440e895bd&language=en-US&query=${search}&page=1&include_adult=false`;
  }

  let allData = await fetch(apiURL);
  let allForData = await allData.json();
  let movies = allForData.results;

  // TO display all movies
  displayAllMovies(movies);

  // To show info about movie
  displayInfoAboutMovie();
}

// To loop on all the sidebar list
for (const category of categoriesList) {
  const categoryName = $(category)
    .text()
    .toLowerCase()
    .trim()
    .replace(' ', '_');
  $(category).click(function () {
    getMoviesData(categoryName);
  });
}

$('.search-input').keydown(function () {
  const searchValue = $(this).val();
  getMoviesData(undefined, searchValue);
});
