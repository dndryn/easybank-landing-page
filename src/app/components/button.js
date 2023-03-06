import create from '../utils/create.js';
let buttons = [];
for (let i = 0; i < 3; i++) {
    let element = create("a", ["button", "is__flex"]);
    buttons.push(element);
}
const [button, link, cta] = [...buttons];
button.setAttribute('class', 'button__normal');
link.setAttribute('class', 'button_link');
cta.setAttribute('class', 'button__cta is__flex');
cta.setAttribute('href', "#");
export { button, link, cta };
