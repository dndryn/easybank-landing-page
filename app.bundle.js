/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/shared/create.ts
// FIXME: When classes gets an empty string trow an error
// TODO: Implement overloads to allow choosing between a 'content' element or an array of 'content'.
function create(tag, classes, content) {
    var _a;
    var element = document.createElement("".concat(tag));
    if (classes) {
        (_a = element.classList).add.apply(_a, classes);
    }
    ;
    if (content instanceof HTMLElement) {
        element.append(content);
    }
    else if (typeof content == "string") {
        element.innerText = "".concat(content);
    }
    ;
    return element;
}
// Previusly:
// (content instanceof HTMLElement) ? element.innerHTML = content.outerHTML: element.innerText = `${content}`;
// (content instanceof HTMLElement) ? element.append(content) : element.innerText = `${content}`;

;// CONCATENATED MODULE: ./src/app/components/button/button.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var buttons = [];
for (var i = 0; i < 3; i++) {
    var button_element = create("a", ["button", "is__flex"]);
    buttons.push(button_element);
}
var _a = __spreadArray([], buttons, true), button_button = _a[0], button_link = _a[1], cta = _a[2];
button_button.setAttribute('class', 'button__normal');
button_link.setAttribute('class', 'button_link');
cta.setAttribute('class', 'button__cta is__flex');
cta.setAttribute('href', "#");


;// CONCATENATED MODULE: ./src/assets/logo.svg
const logo_namespaceObject = __webpack_require__.p + "assets/4d7cebc59950e27d6f94.svg";
;// CONCATENATED MODULE: ./src/app/components/logo/logo.ts



var logo__container = button_link;
var logo = create('object', ["is"]);
logo.type = "image/svg+xml";
logo.setAttribute("data", "".concat(logo_namespaceObject));
logo__container.appendChild(logo);


;// CONCATENATED MODULE: ./src/app/shared/paths.ts
var socials = (/* unused pure expression or super */ null && ([
    "icon-facebook.svg",
    "icon-youtube.svg",
    "icon-twitter.svg",
    "icon-pinterest.svg",
    "icon-instagram.svg",
]));
var link_names = ["home", "about", "contacts", "blog", "careers", "support", "privacy policy"];
var CARD_IMAGE_PATH = "../assets/images/";


;// CONCATENATED MODULE: ./src/app/components/links/links.ts
var links_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var nav_links = create("nav", ["is_flx_rw", "has_x_spcd", "has_y_cntr"]);
nav_links.id = "nav_links";
// Provides n link button to nav_links
var arr = [];
// let names = ["home", "about", "contacts", "blog", "careers"];
var names = link_names;
var links_number = 5;
//TODO: Handle 'links' margin to add padding in both sides properly.
//TODO: Ad ogni elemento 'LI' innestarne uno 'A' (button)
//BUG: If using an imported button it show itself only on the last element of arr: 
// prova creando una variabile btn e assgna il button
for (var links_i = 0; links_i < links_number; links_i++) {
    var links_element = create("a", ["button", "button_link", "nav_link", "is_flx", "has_x_cntr", "has_y_cntr"], "".concat(names[links_i][0].toUpperCase() + names[links_i].substring(1)));
    links_element.setAttribute("id", "link-to_".concat(names[links_i]));
    links_element.setAttribute("href", "#");
    arr[links_i] = links_element; // alt: arr.push(element);
}
//TESTING: links object
//TODO: implement an iterator generator for 'links
// let links: Record<string, HTMLLIElement> = {};
// let names = ["home", "about", "contacts", "blog", "careers"];
// for (let i = 0; i < names.length; i++) {links[names[i]] = arr[i];}
// const [home, about, contacts, blog, careers] = [...Object.values(links)];
// for (let link of links) {links[link].id = `link__${link}`}
var links_a = links_spreadArray([], arr, true), home = links_a[0], about = links_a[1], contacts = links_a[2], blog = links_a[3], careers = links_a[4];
nav_links.append(home, about, contacts, blog, careers);
//TODO: dynamically assign each string to its corresponding id. For example:
//  for (let element in arr) {
//      element.id = `link__${element}`
//     }


;// CONCATENATED MODULE: ./src/app/components/header/header.ts





var nav__cta = cta;
nav__cta.setAttribute("id", "nav__cta");
nav__cta.innerText = "Request Invite";
var nav__logo = logo__container;
nav__logo.setAttribute("id", "nav__logo");
nav__logo.setAttribute("class", "is__flex");
var header = create('header', ["is_flx_rw", "has_x_spcd", "has_y_cntr"]);
header.id = "app_header";
header.append(nav__logo, nav_links, nav__cta);


;// CONCATENATED MODULE: ./src/app/components/hero/hero.ts



//import svgImage from '@asset/bg-intro-desktop.svg';
var hero_title = create("h1", ["is__flex"]);
hero_title.setAttribute("id", "hero_title");
hero_title.innerText = "Next generation digital banking";
hero_title.setAttribute("id", "hero_title");
var hero_description = create("p", ["is__flex"]);
hero_description.setAttribute("id", "hero_description");
hero_description.innerText =
    "Take your financial life online. Your EasyBank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.";
var hero_cta = cta.cloneNode(true);
hero_cta.setAttribute("id", "hero_cta");
var hero_message = create("div", ["is__flex", "on__sides"]);
hero_message.setAttribute("id", "hero_message");
hero_message.append(hero_title, hero_description, hero_cta);
var hero_mockup_image = create("div", ["is_flx"]);
hero_mockup_image.setAttribute("id", "hero_mockup-image");
//hero_mockup_image.style.backgroundImage = `url(${svgImage})`;
var hero_container = create("div", ["is__flex", "on__sides"]);
hero_container.setAttribute("id", "hero_container");
hero_container.append(hero_message, hero_mockup_image);
var hero = create('section', ["is__flex"], hero_container);
hero.setAttribute("id", "hero");


;// CONCATENATED MODULE: ./src/assets/icon-online.svg
const icon_online_namespaceObject = __webpack_require__.p + "assets/b0622b15741418e9efe3.svg";
;// CONCATENATED MODULE: ./src/assets/icon-budgeting.svg
const icon_budgeting_namespaceObject = __webpack_require__.p + "assets/ad7169975ea1eda87072.svg";
;// CONCATENATED MODULE: ./src/assets/icon-onboarding.svg
const icon_onboarding_namespaceObject = __webpack_require__.p + "assets/d74aed6429619336a30e.svg";
;// CONCATENATED MODULE: ./src/assets/icon-api.svg
const icon_api_namespaceObject = __webpack_require__.p + "assets/74c8ad1751bbd1e7f545.svg";
;// CONCATENATED MODULE: ./src/app/components/services/services.ts
var services_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};






var services_title = create("h2", ["section_title", "is_flx", "has_x_cntr"], "Why choose EasyBank?");
services_title.setAttribute("id", "services_title");
var services_info = create("span", ["is__flex"]);
services_info.setAttribute("id", "services_info");
services_info.innerText = "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.";
var services_message = create("div", ["is__flex"]);
services_message.setAttribute("id", "services_message");
services_message.append(services_title, services_info);
// const services_card_container = create("div", ["is__flex"]);
// services_card_container.setAttribute("id", "services_card_container");
var arr_cards = [];
var cards_number = 4;
for (var services_i = 1; services_i <= cards_number; services_i++) {
    var card_icons = [icon_online_namespaceObject, icon_budgeting_namespaceObject, icon_onboarding_namespaceObject, icon_api_namespaceObject];
    var card_titles = ["Online Banking", "Simple Budgeting", "Fan Onboarding", "Open API"];
    var card_content = [
        "Our modern web and mobile application applications allow you to keep track of your finances wherever you are in the world",
        "See exactly where your moneys goes each month. Receive notifications when you're close to hitting your limits.",
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    ];
    var icon = create("object", [
        "card-services_icon",
        "is_flx_cl",
        "has_x_end",
    ]);
    icon.setAttribute("id", "card-services_icon_".concat(services_i));
    icon.type = "image/svg+xml";
    icon.setAttribute("data", "".concat(card_icons[services_i - 1]));
    var icon_container = create("div", [
        "card-services_icon_container",
        "is_flx_cl", "has_x_end"
    ], icon);
    icon_container.setAttribute("id", "card-services_icon_container_".concat(services_i));
    var title = create("span", ["card-services_title", "is_flx_cl", "has_x_end"]);
    title.setAttribute("id", "card-services_title_".concat(services_i));
    title.innerText = card_titles[services_i - 1];
    var info = create("span", ["card-services_info", "is_flx_cl", "has_x_end"]);
    info.setAttribute("id", "card-services_info_".concat(services_i));
    info.innerText = card_content[services_i - 1];
    //FIXME:is__flex must be on first instead of card-services for specificity. 
    //Change this by adopting more specific flex classes.
    var services_element = create("div", ["card", "card-services", "is_flx_cl", "has_x_strt"]);
    services_element.setAttribute("id", "services_card_".concat(services_i));
    services_element.append(icon_container, title, info);
    arr_cards.push(services_element);
}
var services_a = services_spreadArray([], arr_cards, true), card_1 = services_a[0], card_2 = services_a[1], card_3 = services_a[2], card_4 = services_a[3];
var services_cards = create("div", ["is__flex", "on__sides"]);
services_cards.setAttribute("id", "services_cards");
services_cards.append(card_1, card_2, card_3, card_4);
var services_container = create("div", ["is__flex"]);
services_container.setAttribute("id", "services_container");
services_container.append(services_message, services_cards);
var services = create('section', ["is__flex"]);
services.setAttribute("id", "services");
services.appendChild(services_container);


;// CONCATENATED MODULE: ./src/assets/image-confetti.jpg
const image_confetti_namespaceObject = __webpack_require__.p + "assets/67921b1124297023a080.jpg";
;// CONCATENATED MODULE: ./src/assets/image-currency.jpg
const image_currency_namespaceObject = __webpack_require__.p + "assets/1b385bf9f62bf25ef22d.jpg";
;// CONCATENATED MODULE: ./src/assets/image-plane.jpg
const image_plane_namespaceObject = __webpack_require__.p + "assets/03db115dff75876c3f3d.jpg";
;// CONCATENATED MODULE: ./src/assets/image-restaurant.jpg
const image_restaurant_namespaceObject = __webpack_require__.p + "assets/1951b57675babfd83c6c.jpg";
;// CONCATENATED MODULE: ./src/app/components/articles/articles.ts
var articles_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var articles_a, _b, _c;






var arr_img = [image_currency_namespaceObject, image_confetti_namespaceObject, image_plane_namespaceObject, image_restaurant_namespaceObject];
var articles_message = create("div", ["is_flx_cl", "has_x_end"], create("h2", ["section_title", "is_flx"], "Latest Articles"));
articles_message.setAttribute("id", "articles_message");
(articles_a = articles_message === null || articles_message === void 0 ? void 0 : articles_message.querySelector("h2")) === null || articles_a === void 0 ? void 0 : articles_a.setAttribute("id", "articles_title");
var articles_arr_cards = [];
var articles_cards_number = 4;
for (var articles_i = 1; articles_i <= articles_cards_number; articles_i++) {
    var card_images = ["currency", "restaurant", "plane", "confetti"];
    var authors = ["Claire Robins", "Wilson Hutton", "Wilson Hutton", "Claire Robins"];
    var titles = [
        "Receive money in any currency with no fees",
        "Treat yourself without worrying about money",
        "Take your Easybank card wherever you go",
        "Our invite-only Beta accounts are now live!"
    ];
    var contents = [
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money as a single ",
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ",
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ",
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site "
    ];
    var card_image = create("img", ["card-article_img"]);
    card_image === null || card_image === void 0 ? void 0 : card_image.setAttribute("id", "card-article_img".concat(articles_i));
    card_image.src = "".concat(arr_img[articles_i - 1]);
    card_image.alt = "".concat(card_images[articles_i - 1][0].toUpperCase() + card_images[articles_i - 1].substring(1), "'s image");
    var article_author = create("span", ["card-article_author", "is_flx"]);
    article_author === null || article_author === void 0 ? void 0 : article_author.setAttribute("id", "article_author_".concat(articles_i));
    article_author.innerText = "By ".concat(authors[articles_i - 1]);
    var article_title = create("a", ["card-article_title", "is_flx"]);
    article_title === null || article_title === void 0 ? void 0 : article_title.setAttribute("href", "#");
    article_title === null || article_title === void 0 ? void 0 : article_title.setAttribute("id", "article_title_".concat(articles_i));
    article_title.innerText = titles[articles_i - 1];
    var card_text = create("span", ["card-article_text", "is_flx"]);
    card_text === null || card_text === void 0 ? void 0 : card_text.setAttribute("id", "card-article_text_".concat(articles_i));
    card_text.innerText = contents[articles_i - 1];
    var articles_card_content = create("div", ["card-article_content", "is_flx", "has_x_cntr", "has_y_cntr"], create("div", ["card-article_content_cntr", "is_flx_cl", "has_x_spcd"]));
    articles_card_content === null || articles_card_content === void 0 ? void 0 : articles_card_content.setAttribute("id", "card_content_".concat(articles_i));
    (_b = articles_card_content === null || articles_card_content === void 0 ? void 0 : articles_card_content.querySelector("div")) === null || _b === void 0 ? void 0 : _b.setAttribute("id", "card-article_content_cntr_".concat(articles_i - 1));
    (_c = articles_card_content === null || articles_card_content === void 0 ? void 0 : articles_card_content.querySelector("div")) === null || _c === void 0 ? void 0 : _c.append(article_author, article_title, card_text);
    var card = create("div", ["card", "card-article", "is_flx_cl"]);
    card === null || card === void 0 ? void 0 : card.setAttribute("id", "articles_card_".concat(articles_i));
    card === null || card === void 0 ? void 0 : card.append(card_image, articles_card_content);
    articles_arr_cards === null || articles_arr_cards === void 0 ? void 0 : articles_arr_cards.push(card);
}
var _d = articles_spreadArray([], articles_arr_cards, true), articles_card_1 = _d[0], articles_card_2 = _d[1], articles_card_3 = _d[2], articles_card_4 = _d[3];
var articles_cards = create("div", ["is_flx_rw", "has_x_spcd"]);
articles_cards === null || articles_cards === void 0 ? void 0 : articles_cards.setAttribute("id", "articles_cards");
articles_cards === null || articles_cards === void 0 ? void 0 : articles_cards.append(articles_card_1, articles_card_2, articles_card_3, articles_card_4);
var articles_container = create("div", ["is_flx_cl", "has_x_strt"]);
articles_container === null || articles_container === void 0 ? void 0 : articles_container.setAttribute("id", "articles_container");
articles_container === null || articles_container === void 0 ? void 0 : articles_container.append(articles_message, articles_cards);
var articles = create("section", ["is_flx", "has_x_cntr"]);
articles === null || articles === void 0 ? void 0 : articles.setAttribute("id", "articles");
articles === null || articles === void 0 ? void 0 : articles.appendChild(articles_container);


;// CONCATENATED MODULE: ./src/app/components/main/main.ts





var main = create('main', ["is__flex"]);
main.id = 'app-main';
main.append(hero, services, articles);


;// CONCATENATED MODULE: ./src/assets/logo_dark.svg
const logo_dark_namespaceObject = __webpack_require__.p + "assets/40be181bce3d20983033.svg";
;// CONCATENATED MODULE: ./src/assets/icon-facebook.svg
const icon_facebook_namespaceObject = __webpack_require__.p + "assets/1e9b33385e6dfe7a61ac.svg";
;// CONCATENATED MODULE: ./src/assets/icon-youtube.svg
const icon_youtube_namespaceObject = __webpack_require__.p + "assets/7d6960fbb0c4831f7c66.svg";
;// CONCATENATED MODULE: ./src/assets/icon-twitter.svg
const icon_twitter_namespaceObject = __webpack_require__.p + "assets/01a8907dd0beb126cff2.svg";
;// CONCATENATED MODULE: ./src/assets/icon-pinterest.svg
const icon_pinterest_namespaceObject = __webpack_require__.p + "assets/45264b1d1cdf7f0c420d.svg";
;// CONCATENATED MODULE: ./src/assets/icon-instagram.svg
const icon_instagram_namespaceObject = __webpack_require__.p + "assets/54d3962efa2aa6085b77.svg";
;// CONCATENATED MODULE: ./src/app/components/footer/footer.ts
var footer_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var footer_a, footer_b, footer_c;










var footer = create("footer", ["is__flex"]);
footer.id = "app-footer";
var footer_sub = create('div', ["is__flex", "on__sides"]);
footer_sub.setAttribute('id', 'footer_sub');
//TODO: Convert in a function: spread() or diffuse(n, 'div' || HTMLElement, ["class1", "class2"]);
var sub_footr = [];
for (var footer_i = 0; footer_i < 3; footer_i++) {
    var sub_elements = create("div", ["footer_sub_element", "is__flex", "on__sides"]);
    sub_footr.push(sub_elements);
}
var footer_d = footer_spreadArray([], sub_footr, true), footer_sub_a = footer_d[0], footer_sub_b = footer_d[1], footer_sub_c = footer_d[2];
footer_sub_a.setAttribute("id", "footer_sub_a");
footer_sub_b.setAttribute("id", "footer_sub_b");
footer_sub_c.setAttribute("id", "footer_sub_c");
//FIXME: The following works 'cause there's a clone node. 
//TODO: Implement a class with custom component for logo button link ( logo )
var footer_logo = logo__container.cloneNode(true);
footer_logo.setAttribute("id", "footer_logo");
(footer_a = footer_logo
    .querySelector("object")) === null || footer_a === void 0 ? void 0 : footer_a.setAttribute("data", "".concat(logo_dark_namespaceObject));
var footer_socials = create('div', ['is__flex', 'on__sides']);
footer_socials.setAttribute('id', 'footer_socials');
var arr_socials = [];
var svg_socials = [icon_facebook_namespaceObject, icon_youtube_namespaceObject, icon_twitter_namespaceObject, icon_pinterest_namespaceObject, icon_instagram_namespaceObject];
for (var footer_i = 0; footer_i < 5; footer_i++) {
    var sub_elements = create("a", ["footer_social_link", "is__flex"], create('object', ["is__flex"]));
    sub_elements.setAttribute("href", "#");
    (footer_b = sub_elements.querySelector("object")) === null || footer_b === void 0 ? void 0 : footer_b.setAttribute("type", "image/svg+xml");
    (footer_c = sub_elements
        .querySelector("object")) === null || footer_c === void 0 ? void 0 : footer_c.setAttribute("data", "".concat(svg_socials[footer_i]));
    //   ?.setAttribute("data", `./app/layout/icon-instagram.svg`);
    arr_socials.push(sub_elements);
}
var _e = footer_spreadArray([], arr_socials, true), facebook = _e[0], youtube = _e[1], twitter = _e[2], pinterest = _e[3], instagram = _e[4];
footer_socials.append(facebook, youtube, twitter, pinterest, instagram);
var footer_name_links = [
    "Home",
    "About Us",
    "Contacts",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
];
var footer_sub_b_1 = create('div', ["footer_sub_b_container", "is__flex", "on__sides"]);
footer_sub_b_1.setAttribute("id", "footer_sub_b_1");
var footer_sub_b_2 = create('div', ["footer_sub_b_container", "is__flex", "on__sides"]);
footer_sub_b_2.setAttribute("id", "footer_sub_b_2");
var arr_links = [];
for (var footer_i = 0; footer_i < 7; footer_i++) {
    var sub_elements = create("a", ["ftr_link", "is__flex"], "".concat(footer_name_links[footer_i]));
    sub_elements.setAttribute("href", "#");
    arr_links.push(sub_elements);
}
var _f = footer_spreadArray([], arr_links, true), footer_home = _f[0], footer_about = _f[1], footer_contacts = _f[2], footer_blog = _f[3], footer_careers = _f[4], support = _f[5], privacy = _f[6];
footer_sub_b_1.append(footer_about, footer_contacts, footer_blog);
footer_sub_b_2.append(footer_careers, support, privacy);
footer_sub_b.append(footer_sub_b_1, footer_sub_b_2);
var footer_cta = cta.cloneNode(true);
footer_cta.setAttribute("id", "footer_cta");
var footer_copyright = create("span");
footer_copyright.setAttribute("id", "footer_copyright");
footer_copyright.innerText = "© Easybank. All Rights Reserved";
footer_sub_c.append(footer_cta, footer_copyright);
footer_sub_a.append(footer_logo, footer_socials);
footer_sub.append(footer_sub_a, footer_sub_b, footer_sub_c);
footer.appendChild(footer_sub);


;// CONCATENATED MODULE: ./src/app/app.ts
console.log("...hooked on!");
 // TODO: Remove this import when the card component is ready.




// document.addEventListener("DOMContentLoaded", function() {
//     const app = document.body;
//     app.id = "app";
//     app?.append(header, main, footer);
// });
// TODO: Write an error handler that injects the message "app requires JavaScript to be enabled" 
// in case the browser has disabled Javascript.
var app = document.body;
app.id = "app";
app === null || app === void 0 ? void 0 : app.append(header, main, footer);
/* harmony default export */ const app_app = (app);

;// CONCATENATED MODULE: ./src/index.ts

(typeof app_app !== null) ? function () { return app_app; } : console.log('App is null!');

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map