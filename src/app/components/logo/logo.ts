import create from "@utils/create";
import { link } from "@component/button";
import logo_svg from "@asset/logo.svg";

const logo__container = link;
const logo = create('object', ["is"]);

logo.type = "image/svg+xml";
logo.setAttribute("data", `${logo_svg}`);

logo__container.appendChild(logo);

export { logo__container as logo } ;