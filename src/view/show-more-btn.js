import {createElement} from "../utils/utils.js";

const createShowMoreBtnTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class showMoreBtn {
  constructor() {
    this._elem = null;
  }
  _getTemplate() {
    return createShowMoreBtnTemplate();
  }
  getElement() {
    if (!this._elem) {
      this._elem = createElement(this._getTemplate());
    }
    return this._elem;
  }
  removeElement() {
    this._elem = null;
  }
}
