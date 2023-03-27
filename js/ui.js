'use strict';

import { Movie } from './movie.js';

const sidebar = $('aside');
const categories = $('aside ul li');
const sidebarWidth = sidebar.innerWidth();

// To hide sidebar
sidebar.css('left', -sidebarWidth);
// To hide all Categories
$(categories[0]).css('marginTop', $('ul').innerHeight());
categories.css('marginBottom', $('ul').innerHeight());

// Sidebar animation
$('.menu-icon i').click(function () {
  if (Number.parseFloat(sidebar.css('left')) < 0) {
    sidebar.animate({ left: 0 }, 500, function () {
      categories.eq(0).animate({ marginTop: '0px' }, 700, function () {
        categories.eq(0).animate({ marginBottom: '0px' }, 600, function () {
          categories.eq(1).animate({ marginBottom: '0px' }, 500, function () {
            categories.eq(2).animate({ marginBottom: '0px' }, 400, function () {
              categories
                .eq(3)
                .animate({ marginBottom: '0px' }, 400, function () {
                  categories.eq(4).animate({ marginBottom: '0px' }, 400);
                });
            });
          });
        });
      });
    });
    $(this).removeClass('fa-bars');
    $(this).addClass('fa-xmark');
  } else {
    sidebar.animate({ left: -sidebarWidth }, 1000);
    $(this).removeClass('fa-xmark');
    $(this).addClass('fa-bars');

    $(categories[0]).css('marginTop', $('ul').innerHeight());
    categories.css('marginBottom', $('ul').innerHeight());
  }
});

// Function to display the input error message
export function showOrHideErrorMessage(inputName, validationFunc, input) {
  if (inputName == $(`#${input}`)[0]) {
    if (!validationFunc()) {
      $(`#${input} + p`).removeClass('d-none');
    } else {
      $(`#${input} + p`).addClass('d-none');
    }
  }
}

// Function to display Movies
export function displayAllMovies(movies) {
  let moviesHtml = '';
  for (const movie of movies) {
    let movi = new Movie(
      movie.title,
      movie.overview,
      movie.vote_average,
      movie.release_date,
      movie.poster_path
    );

    moviesHtml += `
    <div class="col-lg-4 col-md-6">
      <figure class="position-relative rounded-2 overflow-hidden">
        <img src="http://image.tmdb.org/t/p/w500${movi.image}" alt="Movie" class="w-100 rounded-2" />
        <figcaption
          class="px-1 rounded-bottom-2 position-absolute h-100 start-0 end-0 fw-bold d-flex justify-content-center flex-column"
        >
          <h3 class="name text-center fw-light">${movi.name}</h3>
          <p class="desc text-center">
            ${movi.desc}
          </p>
          <p class="text-center">rate: <span> ${movi.vote.toFixed(1)} </span></p>
          <p class="date text-center"> ${movi.releaseDate} </p>
        </figcaption>
      </figure>
    </div>
    `;
  }
  $('.movies-section .row').html(moviesHtml);
}

// Function To display information about the movie
export function displayInfoAboutMovie() {
  $('figure').mouseenter(function () {
    $(this).find('figcaption').animate({ top: '0' }, 1000);
  });
  $('figure').mouseleave(function () {
    $(this).find('figcaption').animate({ top: '100%' }, 1000);
  });
}
