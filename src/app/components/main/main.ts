import create from '@utils/create';
import { hero } from '@component/hero'
import { services } from '@component/services';
import { articles } from '@component/articles';
import { nav_links } from "@component/links";
import '@style/main';

const menu: HTMLElement = (() => {
    const element = create('div', ["is__flex", "menu--hidden"], nav_links);
    element.id = "menu__menu";
    return element;
})();

const overlay: HTMLElement = (() => {
    const element = create('div', ["is__flex"], menu);
    element.id = "menu__overlay--hidden";
    return element;
})();

const main = create('main', ["is__flex"]);
main.id = 'app-main';
main.append(hero, services, articles);

export { main, overlay, menu };