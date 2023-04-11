import create from "@utils/create";
import { link } from "@component/button";

const logo__container = link;
const logo = create('object', ["is"]);

logo.type = "image/svg+xml";
logo.setAttribute("data", "../../src/assets/svg/logo.svg");

logo__container.appendChild(logo);

export { logo__container as logo } ;