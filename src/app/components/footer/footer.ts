import './footer.scss';
import create from "@utils/create";
import { logo } from "@component/logo";
import { cta } from "@component/button";
import logo_svg from "@asset/logo_dark.svg";
import icon_facebook from "@asset/icon-facebook.svg";
import icon_youtube from "@asset/icon-youtube.svg";
import icon_twitter from "@asset/icon-twitter.svg";
import icon_pinterest from "@asset/icon-pinterest.svg";
import icon_instagram from "@asset/icon-instagram.svg";

const footer = create("footer", ["is__flex"]);
footer.id = `app-footer`;

const footer_sub = create('div', ["is__flex", "on__sides"]);
footer_sub.setAttribute('id', 'footer_sub');

//TODO: Convert in a function: spread() or diffuse(n, 'div' || HTMLElement, ["class1", "class2"]);
let sub_footr: HTMLDivElement[] = []; 
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
const footer_logo = logo.cloneNode(true) as HTMLAnchorElement;
footer_logo.setAttribute("id", "footer_logo");
footer_logo
    .querySelector("object")
    ?.setAttribute("data", `${logo_svg}`);
const footer_socials = create('div', ['is__flex', 'on__sides']);
footer_socials.setAttribute('id', 'footer_socials');
let arr_socials: HTMLAnchorElement[] = [];
const svg_socials: String[] = [icon_facebook, icon_youtube, icon_twitter, icon_pinterest, icon_instagram];
for (let i = 0; i < 5; i++) {
    let sub_elements = create("a", ["footer_social_link", "is__flex"], create('object', ["is__flex"]));
    sub_elements.setAttribute("href", "#");
    sub_elements.querySelector("object")?.setAttribute("type", "image/svg+xml");
    sub_elements
      .querySelector("object")
      ?.setAttribute("data", `${svg_socials[i]}`);
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
const footer_sub_b_1 = create('div', ["footer_sub_b_container","is__flex", "on__sides"]);
footer_sub_b_1.setAttribute("id", "footer_sub_b_1");
const footer_sub_b_2 = create('div', ["footer_sub_b_container","is__flex", "on__sides"]);
footer_sub_b_2.setAttribute("id", "footer_sub_b_2");
let arr_links: HTMLAnchorElement[] = [];
for (let i = 0; i < 7; i++) {
  let sub_elements = create("a", ["ftr_link","is__flex"], `${footer_name_links[i]}`);
  sub_elements.setAttribute("href", "#");
  arr_links.push(sub_elements);
}
const [home, about, contacts, blog, careers, support, privacy] = [...arr_links];

footer_sub_b.append(about, contacts, blog, careers, support, privacy);

const footer_cta = cta.cloneNode(true) as HTMLAnchorElement;
footer_cta.setAttribute("id", "footer_cta");
const footer_copyright = create("span");
footer_copyright.setAttribute("id", "footer_copyright");
footer_copyright.innerText = "© Easybank. All Rights Reserved";
footer_sub_c.append(footer_cta, footer_copyright);
footer_sub_a.append(footer_logo, footer_socials);
footer_sub.append(footer_sub_a, footer_sub_b, footer_sub_c);
footer.appendChild(footer_sub);

export { footer };
