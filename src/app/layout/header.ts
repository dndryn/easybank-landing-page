import create from "../utils/create.js";

import { logo } from "../components/logo.js";
import { nav_links } from "../components/links.js";
import { cta } from "../components/button.js";

const nav__cta = cta;
nav__cta.setAttribute("id", "nav__cta");
nav__cta.innerText = "Request Invite";

const nav__logo = logo;
nav__logo.setAttribute("id", "nav__logo");
nav__logo.setAttribute("class", "is__flex");

const header = create('header', ["is_flx_rw", "has_x_spcd", "has_y_cntr"]);
header.id = `app_header`;
header.append(nav__logo, nav_links, nav__cta);

export { header };





