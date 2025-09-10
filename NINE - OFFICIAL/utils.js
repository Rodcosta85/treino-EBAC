export const $ = (selector) => document.querySelector(selector);
export const createEl = (tag, className) => {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  return el;
};
