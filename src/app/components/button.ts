import create from '../services/create.js';

let buttons: HTMLAnchorElement[] = [];

for (let i = 0; i < 3; i++) {
  let element = create("a", ["button", "is__flex"]);
  buttons.push(element);
}

const [button, link, cta] = [...buttons];

button.setAttribute('class','button__normal');
link.setAttribute('class', 'button_link');
cta.setAttribute('class', 'button__cta is__flex');
cta.setAttribute('href', "#");

export { button, link, cta };