import {createElement} from "../utils/utils.js";

const getFilmCardTemplate = (film) => {
  const MAX_DESCRIPTION_LENGTH = 139;
  const {title, rating, filmReleaseYear, filmDuration, genres, posterName, description, comments} = film;
  const stringifyedGenres = genres.join();
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${filmReleaseYear}</span>
        <span class="film-card__duration">${filmDuration.hours + `h` + filmDuration.minutes + `m`}</span>
        <span class="film-card__genre">${stringifyedGenres}</span>
      </p>
      <img src="./images/posters/${posterName}" alt="" class="film-card__poster">
      <p class="film-card__description">${description.length > MAX_DESCRIPTION_LENGTH ? description.slice(0, MAX_DESCRIPTION_LENGTH) + `...` : description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export default class FilmCard {
  constructor(film) {
    this._film = film;
    this._element = null;
  }
  _getTemplate() {
    return getFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

