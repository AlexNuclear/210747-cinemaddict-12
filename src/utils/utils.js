export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloatInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return (lower + Math.random() * (upper - lower)).toFixed(1);
};

export const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export const getStatus = (amountOfWatched) => {
  let status;
  if (amountOfWatched.length === 0) {
    status = ``;
  } else if (amountOfWatched.length <= 10) {
    status = `novice`;
  } else if (amountOfWatched.length >= 10 && amountOfWatched.length <= 20) {
    status = `fan`;
  } else {
    status = `movie buff`;
  }
  return status;
};

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const renederElement = (container, element, place) => {
  switch(place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  };
};

export const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElem = document.createElement(`div`);
  newElem.innerHTML = template;
  return newElem.firstChild;
}