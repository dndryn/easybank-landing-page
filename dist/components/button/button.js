import create from '../../services/create.js';
let buttons = [];
for (let i = 0; i < 3; i++) {
    let element = create("a", ["button", "is__flex"]);
    buttons.push(element);
}
const [button, link, cta] = [...buttons];
button.setAttribute('class', 'button__normal');
link.setAttribute('class', 'button__link');
cta.setAttribute('class', 'button__cta');
export { button, link, cta };
