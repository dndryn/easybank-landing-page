import './hero.scss';
import create from "@utils/create";
import { cta } from "@component/button";

const hero_title = create("h1", ["is__flex"]);
hero_title.setAttribute("id", "hero_title");
hero_title.innerText = "Next generation digital banking";
hero_title.setAttribute("id", "hero_title");

const hero_description = create("p", ["is__flex"]);
hero_description.setAttribute("id", "hero_description");
hero_description.innerText =
  "Take your financial life online. Your EasyBank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.";

const hero_cta = cta.cloneNode(true) as HTMLAnchorElement;
hero_cta.setAttribute("id", "hero_cta");

const hero_message = create("div", ["is__flex", "on__sides"]);
hero_message.setAttribute("id", "hero_message");
hero_message.append(hero_title, hero_description, hero_cta);

const hero_mockup_image = create("div", ["is_flx"]);
hero_mockup_image.setAttribute("id", "hero_mockup-image");

const hero_container = create("div", ["is__flex", "on__sides"]);
hero_container.setAttribute("id", "hero_container");

// Conditional in order to 
// improve CSS lightening.
window.innerWidth <= 480
  ? hero_container.append(hero_mockup_image, hero_message)
  : hero_container.append(hero_message, hero_mockup_image);

const hero = create('section', ["is__flex"], hero_container);
hero.setAttribute("id", "hero");

export { hero };


