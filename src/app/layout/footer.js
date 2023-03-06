import create from "../utils/create.js";
import { logo } from "../components/logo.js";
import { socials as social_paths } from "../utils/paths.js";
import { cta } from "../components/button.js";
const footer = create("footer", ["is__flex"]);
footer.id = `app-footer`;
const footer_sub = create('div', ["is__flex", "on__sides"]);
footer_sub.setAttribute('id', 'footer_sub');
//TODO: Convert in a function: spread() or diffuse(n, 'div' || HTMLElement, ["class1", "class2"]);
let sub_footr = [];
for (let i = 0; i < 3; i++) {
    let sub_elements = create("div", ["footer_sub_element", "is__flex", "on__sides"]);
    sub_footr.push(sub_elements);
}
const [footer_sub_a, footer_sub_b, footer_sub_c] = [...sub_footr];
footer_sub_a.setAttribute("id", "footer_sub_a");
footer_sub_b.setAttribute("id", "footer_sub_b");
footer_sub_c.setAttribute("id", "footer_sub_c");
//FIXME: The following works 'cause there's a clone node. 
//TODO: Implement a class with custom component for logo button link ( logo )
const footer_logo = logo.cloneNode(true);
footer_logo.setAttribute("id", "footer_logo");
footer_logo
    .querySelector("object")
    ?.setAttribute("data", "../../src/assets/svg/logo_dark.svg");
const footer_socials = create('div', ['is__flex', 'on__sides']);
footer_socials.setAttribute('id', 'footer_socials');
let arr_socials = [];
for (let i = 0; i < 5; i++) {
    let sub_elements = create("a", ["footer_social_link", "is__flex"], create('object', ["is__flex"]));
    sub_elements.setAttribute("href", "#");
    sub_elements.querySelector("object")?.setAttribute("type", "image/svg+xml");
    sub_elements
        .querySelector("object")
        ?.setAttribute("data", `../../src/assets/svg/${social_paths[i]}`);
    //   ?.setAttribute("data", `./app/layout/icon-instagram.svg`);
    arr_socials.push(sub_elements);
}
const [facebook, youtube, twitter, pinterest, instagram] = [...arr_socials];
footer_socials.append(facebook, youtube, twitter, pinterest, instagram);
const footer_name_links = [
    "Home",
    "About Us",
    "Contacts",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
];
const footer_sub_b_1 = create('div', ["footer_sub_b_container", "is__flex", "on__sides"]);
footer_sub_b_1.setAttribute("id", "footer_sub_b_1");
const footer_sub_b_2 = create('div', ["footer_sub_b_container", "is__flex", "on__sides"]);
footer_sub_b_2.setAttribute("id", "footer_sub_b_2");
let arr_links = [];
for (let i = 0; i < 7; i++) {
    let sub_elements = create("a", ["ftr_link", "is__flex"], `${footer_name_links[i]}`);
    sub_elements.setAttribute("href", "#");
    arr_links.push(sub_elements);
}
const [home, about, contacts, blog, careers, support, privacy] = [...arr_links];
footer_sub_b_1.append(about, contacts, blog);
footer_sub_b_2.append(careers, support, privacy);
footer_sub_b.append(footer_sub_b_1, footer_sub_b_2);
const footer_cta = cta.cloneNode(true);
footer_cta.setAttribute("id", "footer_cta");
const footer_copyright = create("span");
footer_copyright.setAttribute("id", "footer_copyright");
footer_copyright.innerText = "© Easybank. All Rights Reserved";
footer_sub_c.append(footer_cta, footer_copyright);
footer_sub_a.append(footer_logo, footer_socials);
footer_sub.append(footer_sub_a, footer_sub_b, footer_sub_c);
footer.appendChild(footer_sub);
export { footer };
