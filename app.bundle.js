/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ar": () => (/* binding */ cta),
/* harmony export */   "p4": () => (/* binding */ link)
/* harmony export */ });
/* unused harmony export button */
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(374);
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
    var element = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("a", ["button", "is__flex"]);
    buttons.push(element);
}
var _a = __spreadArray([], buttons, true), button = _a[0], link = _a[1], cta = _a[2];
button.setAttribute('class', 'button__normal');
link.setAttribute('class', 'button_link');
cta.setAttribute('class', 'button__cta is__flex');
cta.setAttribute('href', "#");



/***/ }),

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nav_links": () => (/* binding */ nav_links)
});

// EXTERNAL MODULE: ./src/app/shared/create.ts
var create = __webpack_require__(374);
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var nav_links = (0,create/* default */.Z)("nav", ["is_flx_rw", "has_x_spcd", "has_y_cntr"]);
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
for (var i = 0; i < links_number; i++) {
    var links_element = (0,create/* default */.Z)("a", ["button", "button_link", "nav_link", "is_flx", "has_x_cntr", "has_y_cntr"], "".concat(names[i][0].toUpperCase() + names[i].substring(1)));
    links_element.setAttribute("id", "link-to_".concat(names[i]));
    links_element.setAttribute("href", "#");
    arr[i] = links_element; // alt: arr.push(element);
}
//TESTING: links object
//TODO: implement an iterator generator for 'links
// let links: Record<string, HTMLLIElement> = {};
// let names = ["home", "about", "contacts", "blog", "careers"];
// for (let i = 0; i < names.length; i++) {links[names[i]] = arr[i];}
// const [home, about, contacts, blog, careers] = [...Object.values(links)];
// for (let link of links) {links[link].id = `link__${link}`}
var _a = __spreadArray([], arr, true), home = _a[0], about = _a[1], contacts = _a[2], blog = _a[3], careers = _a[4];
nav_links.append(home, about, contacts, blog, careers);
//TODO: dynamically assign each string to its corresponding id. For example:
//  for (let element in arr) {
//      element.id = `link__${element}`
//     }



/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DH": () => (/* binding */ main),
  "GI": () => (/* binding */ menu),
  "IJ": () => (/* binding */ overlay)
});

// EXTERNAL MODULE: ./src/app/shared/create.ts
var create = __webpack_require__(374);
// EXTERNAL MODULE: ./src/app/components/button/button.ts
var button_button = __webpack_require__(841);
;// CONCATENATED MODULE: ./src/app/components/hero/hero.ts



var hero_title = (0,create/* default */.Z)("h1", ["is__flex"]);
hero_title.setAttribute("id", "hero_title");
hero_title.innerText = "Next generation digital banking";
hero_title.setAttribute("id", "hero_title");
var hero_description = (0,create/* default */.Z)("p", ["is__flex"]);
hero_description.setAttribute("id", "hero_description");
hero_description.innerText =
    "Take your financial life online. Your EasyBank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.";
var hero_cta = button_button/* cta.cloneNode */.ar.cloneNode(true);
hero_cta.setAttribute("id", "hero_cta");
var hero_message = (0,create/* default */.Z)("div", ["is__flex", "on__sides"]);
hero_message.setAttribute("id", "hero_message");
hero_message.append(hero_title, hero_description, hero_cta);
var hero_mockup_image = (0,create/* default */.Z)("div", ["is_flx"]);
hero_mockup_image.setAttribute("id", "hero_mockup-image");
var hero_container = (0,create/* default */.Z)("div", ["is__flex", "on__sides"]);
hero_container.setAttribute("id", "hero_container");
// Conditional in order to 
// improve CSS lightening.
window.innerWidth <= 480
    ? hero_container.append(hero_mockup_image, hero_message)
    : hero_container.append(hero_message, hero_mockup_image);
var hero = (0,create/* default */.Z)('section', ["is__flex"], hero_container);
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};







var services_title = (0,create/* default */.Z)("h2", ["section_title", "is_flx", "has_x_cntr"], "Why choose EasyBank?");
services_title.setAttribute("id", "services_title");
var services_info = (0,create/* default */.Z)("span", ["is__flex"]);
services_info.setAttribute("id", "services_info");
services_info.innerText = "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.";
var services_message = (0,create/* default */.Z)("div", ["is__flex"]);
services_message.setAttribute("id", "services_message");
services_message.append(services_title, services_info);
// const services_card_container = create("div", ["is__flex"]);
// services_card_container.setAttribute("id", "services_card_container");
var arr_cards = [];
var cards_number = 4;
for (var i = 1; i <= cards_number; i++) {
    var card_icons = [icon_online_namespaceObject, icon_budgeting_namespaceObject, icon_onboarding_namespaceObject, icon_api_namespaceObject];
    var card_titles = ["Online Banking", "Simple Budgeting", "Fan Onboarding", "Open API"];
    var card_content = [
        "Our modern web and mobile application applications allow you to keep track of your finances wherever you are in the world",
        "See exactly where your moneys goes each month. Receive notifications when you're close to hitting your limits.",
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    ];
    var icon = (0,create/* default */.Z)("object", [
        "card-services_icon",
        "is_flx_cl",
        "has_x_end",
    ]);
    icon.setAttribute("id", "card-services_icon_".concat(i));
    icon.type = "image/svg+xml";
    icon.setAttribute("data", "".concat(card_icons[i - 1]));
    var icon_container = (0,create/* default */.Z)("div", [
        "card-services_icon_container",
        "is_flx_cl", "has_x_end"
    ], icon);
    icon_container.setAttribute("id", "card-services_icon_container_".concat(i));
    var title = (0,create/* default */.Z)("span", ["card-services_title", "is_flx_cl", "has_x_end"]);
    title.setAttribute("id", "card-services_title_".concat(i));
    title.innerText = card_titles[i - 1];
    var info = (0,create/* default */.Z)("span", ["card-services_info", "is_flx_cl", "has_x_end"]);
    info.setAttribute("id", "card-services_info_".concat(i));
    info.innerText = card_content[i - 1];
    //FIXME:is__flex must be on first instead of card-services for specificity. 
    //Change this by adopting more specific flex classes.
    var services_element = (0,create/* default */.Z)("div", ["card", "card-services", "is_flx_cl", "has_x_strt"]);
    services_element.setAttribute("id", "services_card_".concat(i));
    services_element.append(icon_container, title, info);
    arr_cards.push(services_element);
}
var _a = __spreadArray([], arr_cards, true), card_1 = _a[0], card_2 = _a[1], card_3 = _a[2], card_4 = _a[3];
var services_cards = (0,create/* default */.Z)("div", ["is__flex", "on__sides"]);
services_cards.setAttribute("id", "services_cards");
services_cards.append(card_1, card_2, card_3, card_4);
var services_container = (0,create/* default */.Z)("div", ["is__flex"]);
services_container.setAttribute("id", "services_container");
services_container.append(services_message, services_cards);
var services = (0,create/* default */.Z)('section', ["is__flex"]);
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
var articles_message = (0,create/* default */.Z)("div", ["is_flx_cl", "has_x_end"], (0,create/* default */.Z)("h2", ["section_title", "is_flx"], "Latest Articles"));
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
    var card_image = (0,create/* default */.Z)("img", ["card-article_img"]);
    card_image === null || card_image === void 0 ? void 0 : card_image.setAttribute("id", "card-article_img".concat(articles_i));
    card_image.src = "".concat(arr_img[articles_i - 1]);
    card_image.alt = "".concat(card_images[articles_i - 1][0].toUpperCase() + card_images[articles_i - 1].substring(1), "'s image");
    var article_author = (0,create/* default */.Z)("span", ["card-article_author", "is_flx"]);
    article_author === null || article_author === void 0 ? void 0 : article_author.setAttribute("id", "article_author_".concat(articles_i));
    article_author.innerText = "By ".concat(authors[articles_i - 1]);
    var article_title = (0,create/* default */.Z)("a", ["card-article_title", "is_flx"]);
    article_title === null || article_title === void 0 ? void 0 : article_title.setAttribute("href", "#");
    article_title === null || article_title === void 0 ? void 0 : article_title.setAttribute("id", "article_title_".concat(articles_i));
    article_title.innerText = titles[articles_i - 1];
    var card_text = (0,create/* default */.Z)("span", ["card-article_text", "is_flx"]);
    card_text === null || card_text === void 0 ? void 0 : card_text.setAttribute("id", "card-article_text_".concat(articles_i));
    card_text.innerText = contents[articles_i - 1];
    var articles_card_content = (0,create/* default */.Z)("div", ["card-article_content", "is_flx", "has_x_cntr", "has_y_cntr"], (0,create/* default */.Z)("div", ["card-article_content_cntr", "is_flx_cl", "has_x_spcd"]));
    articles_card_content === null || articles_card_content === void 0 ? void 0 : articles_card_content.setAttribute("id", "card_content_".concat(articles_i));
    (_b = articles_card_content === null || articles_card_content === void 0 ? void 0 : articles_card_content.querySelector("div")) === null || _b === void 0 ? void 0 : _b.setAttribute("id", "card-article_content_cntr_".concat(articles_i - 1));
    (_c = articles_card_content === null || articles_card_content === void 0 ? void 0 : articles_card_content.querySelector("div")) === null || _c === void 0 ? void 0 : _c.append(article_author, article_title, card_text);
    var card = (0,create/* default */.Z)("div", ["card", "card-article", "is_flx_cl"]);
    card === null || card === void 0 ? void 0 : card.setAttribute("id", "articles_card_".concat(articles_i));
    card === null || card === void 0 ? void 0 : card.append(card_image, articles_card_content);
    articles_arr_cards === null || articles_arr_cards === void 0 ? void 0 : articles_arr_cards.push(card);
}
var _d = articles_spreadArray([], articles_arr_cards, true), articles_card_1 = _d[0], articles_card_2 = _d[1], articles_card_3 = _d[2], articles_card_4 = _d[3];
var articles_cards = (0,create/* default */.Z)("div", ["is_flx_rw", "has_x_spcd"]);
articles_cards === null || articles_cards === void 0 ? void 0 : articles_cards.setAttribute("id", "articles_cards");
articles_cards === null || articles_cards === void 0 ? void 0 : articles_cards.append(articles_card_1, articles_card_2, articles_card_3, articles_card_4);
var articles_container = (0,create/* default */.Z)("div", ["is_flx_cl", "has_x_strt"]);
articles_container === null || articles_container === void 0 ? void 0 : articles_container.setAttribute("id", "articles_container");
articles_container === null || articles_container === void 0 ? void 0 : articles_container.append(articles_message, articles_cards);
var articles = (0,create/* default */.Z)("section", ["is_flx", "has_x_cntr"]);
articles === null || articles === void 0 ? void 0 : articles.setAttribute("id", "articles");
articles === null || articles === void 0 ? void 0 : articles.appendChild(articles_container);


// EXTERNAL MODULE: ./src/app/components/links/links.ts + 1 modules
var links = __webpack_require__(728);
;// CONCATENATED MODULE: ./src/app/components/main/main.ts






var menu = (function () {
    var element = (0,create/* default */.Z)('div', ["is__flex", "menu--hidden"], links.nav_links);
    element.id = "menu__menu";
    return element;
})();
var overlay = (function () {
    var element = (0,create/* default */.Z)('div', ["is__flex"], menu);
    element.id = "menu__overlay--hidden";
    return element;
})();
var main = (0,create/* default */.Z)('main', ["is__flex"]);
main.id = 'app-main';
main.append(hero, services, articles);



/***/ }),

/***/ 374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ create)
/* harmony export */ });
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "db5f652f9e45ea83ec3f" + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "easybank:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"860":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkeasybank"] = self["webpackChunkeasybank"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./src/app/shared/create.ts
var create = __webpack_require__(374);
// EXTERNAL MODULE: ./src/app/components/button/button.ts
var button_button = __webpack_require__(841);
;// CONCATENATED MODULE: ./src/assets/logo.svg
const logo_namespaceObject = __webpack_require__.p + "assets/4d7cebc59950e27d6f94.svg";
;// CONCATENATED MODULE: ./src/app/components/logo/logo.ts



var logo__container = button_button/* link */.p4;
var logo = (0,create/* default */.Z)('object', ["is"]);
logo.type = "image/svg+xml";
logo.setAttribute("data", "".concat(logo_namespaceObject));
logo__container.appendChild(logo);


;// CONCATENATED MODULE: ./src/app/components/header/header.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var nav__cta = button_button/* cta */.ar;
nav__cta.setAttribute("id", "nav__cta");
nav__cta.innerText = "Request Invite";
var nav__logo = logo__container;
nav__logo.setAttribute("id", "nav__logo");
nav__logo.setAttribute("class", "is__flex");
var header = (0,create/* default */.Z)('header', ["is_flx_rw", "has_x_spcd", "has_y_cntr"]);
header.id = "app_header";
// Element with dynamic import for mobile menu
// FIXME: Dynamic import renders element only on first load
if (window.innerWidth <= 480) {
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var toggle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__.e(/* import() */ 860).then(__webpack_require__.bind(__webpack_require__, 860))];
                case 1:
                    toggle = (_a.sent()).toggle;
                    header.append(nav__logo, toggle);
                    return [2 /*return*/];
            }
        });
    }); })();
}
else {
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var nav_links;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 728))];
                case 1:
                    nav_links = (_a.sent()).nav_links;
                    header.append(nav__logo, nav_links, button_button/* cta */.ar);
                    return [2 /*return*/];
            }
        });
    }); })();
}


// EXTERNAL MODULE: ./src/app/components/main/main.ts + 11 modules
var main = __webpack_require__(349);
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b, _c;










var footer = (0,create/* default */.Z)("footer", ["is__flex"]);
footer.id = "app-footer";
var footer_sub = (0,create/* default */.Z)('div', ["is__flex", "on__sides"]);
footer_sub.setAttribute('id', 'footer_sub');
//TODO: Convert in a function: spread() or diffuse(n, 'div' || HTMLElement, ["class1", "class2"]);
var sub_footr = [];
for (var i = 0; i < 3; i++) {
    var sub_elements = (0,create/* default */.Z)("div", ["footer_sub_element", "is__flex", "on__sides"]);
    sub_footr.push(sub_elements);
}
var _d = __spreadArray([], sub_footr, true), footer_sub_a = _d[0], footer_sub_b = _d[1], footer_sub_c = _d[2];
footer_sub_a.setAttribute("id", "footer_sub_a");
footer_sub_b.setAttribute("id", "footer_sub_b");
footer_sub_c.setAttribute("id", "footer_sub_c");
//FIXME: The following works 'cause there's a clone node. 
//TODO: Implement a class with custom component for logo button link ( logo )
var footer_logo = logo__container.cloneNode(true);
footer_logo.setAttribute("id", "footer_logo");
(_a = footer_logo
    .querySelector("object")) === null || _a === void 0 ? void 0 : _a.setAttribute("data", "".concat(logo_dark_namespaceObject));
var footer_socials = (0,create/* default */.Z)('div', ['is__flex', 'on__sides']);
footer_socials.setAttribute('id', 'footer_socials');
var arr_socials = [];
var svg_socials = [icon_facebook_namespaceObject, icon_youtube_namespaceObject, icon_twitter_namespaceObject, icon_pinterest_namespaceObject, icon_instagram_namespaceObject];
for (var i = 0; i < 5; i++) {
    var sub_elements = (0,create/* default */.Z)("a", ["footer_social_link", "is__flex"], (0,create/* default */.Z)('object', ["is__flex"]));
    sub_elements.setAttribute("href", "#");
    (_b = sub_elements.querySelector("object")) === null || _b === void 0 ? void 0 : _b.setAttribute("type", "image/svg+xml");
    (_c = sub_elements
        .querySelector("object")) === null || _c === void 0 ? void 0 : _c.setAttribute("data", "".concat(svg_socials[i]));
    arr_socials.push(sub_elements);
}
var _e = __spreadArray([], arr_socials, true), facebook = _e[0], youtube = _e[1], twitter = _e[2], pinterest = _e[3], instagram = _e[4];
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
var footer_sub_b_1 = (0,create/* default */.Z)('div', ["footer_sub_b_container", "is__flex", "on__sides"]);
footer_sub_b_1.setAttribute("id", "footer_sub_b_1");
var footer_sub_b_2 = (0,create/* default */.Z)('div', ["footer_sub_b_container", "is__flex", "on__sides"]);
footer_sub_b_2.setAttribute("id", "footer_sub_b_2");
var arr_links = [];
for (var i = 0; i < 7; i++) {
    var sub_elements = (0,create/* default */.Z)("a", ["ftr_link", "is__flex"], "".concat(footer_name_links[i]));
    sub_elements.setAttribute("href", "#");
    arr_links.push(sub_elements);
}
var _f = __spreadArray([], arr_links, true), home = _f[0], about = _f[1], contacts = _f[2], blog = _f[3], careers = _f[4], support = _f[5], privacy = _f[6];
footer_sub_b.append(about, contacts, blog, careers, support, privacy);
var footer_cta = button_button/* cta.cloneNode */.ar.cloneNode(true);
footer_cta.setAttribute("id", "footer_cta");
var footer_copyright = (0,create/* default */.Z)("span");
footer_copyright.setAttribute("id", "footer_copyright");
footer_copyright.innerText = "© Easybank. All Rights Reserved";
footer_sub_c.append(footer_cta, footer_copyright);
footer_sub_a.append(footer_logo, footer_socials);
footer_sub.append(footer_sub_a, footer_sub_b, footer_sub_c);
footer.appendChild(footer_sub);


;// CONCATENATED MODULE: ./src/app/app.ts
console.log("...hooked on!");




// document.addEventListener("DOMContentLoaded", function() {
//     const app = document.body;
//     app.id = "app";
//     app?.append(header, main, footer);
// });
// TODO: Write an error handler that injects the message "app requires JavaScript to be enabled" 
// in case the browser has disabled Javascript.
var app = document.body;
app.id = "app";
app === null || app === void 0 ? void 0 : app.append(header, main/* main */.DH, footer);
/* harmony default export */ const app_app = (app);

;// CONCATENATED MODULE: ./src/index.ts

(typeof app_app !== null) ? function () { return app_app; } : console.log('App is null!');

})();

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map