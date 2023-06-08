import "./header.scss";
import create from "@utils/create";
import { logo } from "@component/logo";
import { cta } from "@component/button";

const nav__cta = cta;
nav__cta.setAttribute("id", "nav__cta");
nav__cta.innerText = "Request Invite";

const nav__logo = logo;
nav__logo.setAttribute("id", "nav__logo");
nav__logo.setAttribute("class", "is__flex");

const header = create('header', ["is_flx_rw", "has_x_spcd", "has_y_cntr"]);
header.id = `app_header`;

// Element with dynamic import for mobile menu
// FIXME: Dynamic import renders element only on first load
if (window.innerWidth <= 480) {
  (async () => {
    const { toggle } = await import("@component/menu");
    header.append(nav__logo, toggle);
  })();
} else {
  (async () => {
      //TODO: Put 'cta' too
      const { nav_links } = await import("@component/links");
      header.append(nav__logo, nav_links, cta);
  })();
}

export { header };





