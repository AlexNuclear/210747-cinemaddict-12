import {render, RenderPosition} from "./utils/utils.js"

import FilmCardView from "./view/film-card.js"
import ShowMoreBtnView from "./view/show-more-btn.js"
import MenuView from "./view/menu.js";
import SortView from "./view/sort.js";
import ProfileStatusView from "./view/profile-status.js"
import PopUpView from "./view/pop-up.js";

import {generateFilmCard} from "./mock/film-card.js";
import {getFilters} from "./mock/filters.js"


const FILMS_COUNT = 26;
const STARTING_FILMS_COUNT = 5;
const films = new Array(FILMS_COUNT).fill().map(generateFilmCard);
const firstFilms = new Array(STARTING_FILMS_COUNT).fill().map(generateFilmCard);
const filters = getFilters(films);
let renderedFilms = STARTING_FILMS_COUNT;

const renderFilm = (container, film) => {
  const filmComponent = new FilmCardView(film)
  const filmPopUpComponent = new PopUpView(film)

  const showPopUp = () => {
    render(siteFooterElement,filmPopUpComponent.getElement(), RenderPosition.BEFOREEND)
  }
  const hidePopUp = () => {
    console.log(filmPopUpComponent.getElement())
    filmPopUpComponent.getElement().remove()
  }

  filmComponent.getElement().querySelector(`.film-card__poster`).addEventListener('click', () => {
    showPopUp()
  })
  filmComponent.getElement().querySelector(`.film-card__title`).addEventListener('click', () => {
    showPopUp()
  })
  filmComponent.getElement().querySelector(`.film-card__comments`).addEventListener('click', () => {
    showPopUp()
  })
  
  filmPopUpComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener('click', () => {
    hidePopUp()
  })
  render(container, filmComponent.getElement(), RenderPosition.AFTERBEGIN)
}

const renderNextFilms = () => {
  let filmsToRender = films.slice(renderedFilms, renderedFilms + STARTING_FILMS_COUNT)

  filmsToRender.forEach((filmCard) => {
    renderFilm($filmsContainer, filmCard)
  })
  renderedFilms = renderedFilms + STARTING_FILMS_COUNT

  if (renderedFilms >= FILMS_COUNT) {
    showMoreButton.remove()
  }
};

const siteHeaderElement = document.querySelector('.header')
const siteMainElement = document.querySelector('.main')
const siteFooterElement = document.querySelector('.footer')

render(siteMainElement, new SortView().getElement(), RenderPosition.AFTERBEGIN)
render(siteMainElement, new MenuView(filters).getElement(), RenderPosition.AFTERBEGIN)
  
render(siteHeaderElement, new ProfileStatusView(filters).getElement(), RenderPosition.BEFOREEND)

const $filmsContainer = siteMainElement.querySelector('.films-list__container')

firstFilms.forEach((card) => {
  renderFilm($filmsContainer, card)
})

render(siteMainElement, new ShowMoreBtnView().getElement(), RenderPosition.BEFOREEND)

const showMoreButton = siteMainElement.querySelector('.films-list__show-more')

showMoreButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  renderNextFilms()
});

const $footerStatistics = siteFooterElement.querySelector('.footer__statistics')
$footerStatistics.innerText = `${FILMS_COUNT} movies inside`

// render($footer, new PopUpView(films[0]).getElement(), RenderPosition.BEFOREEND) 