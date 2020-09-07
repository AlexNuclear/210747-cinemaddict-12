import {renderTemplate, renderElement, RenderPosition} from "./utils/utils.js"
import {getMenuTemplate} from "./view/menu.js";
import {getFilmCardTemplate} from "./view/film-card.js";
import {getPopUpTemplate} from "./view/pop-up.js";
import {getProfileStatusTemplate} from "./view/profile-status.js";
import ShowMoreBtnView from "./view/show-more-btn.js"

import {generateFilmCard} from "./mock/film-card.js";
import {getFilters} from "./mock/filters.js"


const FILMS_COUNT = 26;
const STARTING_FILMS_COUNT = 5;
const films = new Array(FILMS_COUNT).fill().map(generateFilmCard);
const firstFilms = new Array(STARTING_FILMS_COUNT).fill().map(generateFilmCard);
const filters = getFilters(films);
let renderedFilms = STARTING_FILMS_COUNT;

const renderNextFilms = () => {
  let filmsToRender = films.slice(renderedFilms, renderedFilms + STARTING_FILMS_COUNT)

  filmsToRender.forEach((filmCard) => {
    renderTemplate($filmsContainer,getFilmCardTemplate(filmCard))
  })
  renderedFilms = renderedFilms + STARTING_FILMS_COUNT

  if (renderedFilms >= FILMS_COUNT) {
    showMoreButton.remove()
  }
};

const siteHeaderElement = document.querySelector('.header')
const siteMainElement = document.querySelector('.main')

renderTemplate(siteMainElement, getMenuTemplate(filters), 'afterbegin')
renderTemplate(siteHeaderElement, getProfileStatusTemplate(filters))

const $filmsContainer = siteMainElement.querySelector('.films-list__container')

firstFilms.forEach((card) => {
  renderTemplate($filmsContainer,getFilmCardTemplate(card))
})

renderElement(siteMainElement, new ShowMoreBtnView().getElement(), RenderPosition.AFTERBEGIN)

// const showMoreButton = siteMainElement.querySelector('.films-list__show-more')

// showMoreButton.addEventListener(`click`, (evt) => {
//   evt.preventDefault();
//   renderNextFilms()
// });

const $footer = document.querySelector('.footer')

renderTemplate($footer, getPopUpTemplate(films[0]), 'afterend') 