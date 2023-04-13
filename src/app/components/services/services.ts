import "./services.scss";
import create from "@utils/create";
import icon_online from "@asset/icon-online.svg";
import icon_budgeting from "@asset/icon-budgeting.svg";
import icon_onboarding from "@asset/icon-onboarding.svg";
import icon_api from "@asset/icon-api.svg";

const services_title = create("h2", ["section_title","is_flx", "has_x_cntr"], "Why choose EasyBank?");
services_title.setAttribute("id", "services_title");
const services_info =  create("span", ["is__flex"]);
services_info.setAttribute("id", "services_info");
services_info.innerText = `We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.`;

const services_message = create("div", ["is__flex"]);
services_message.setAttribute("id", "services_message");
services_message.append(services_title, services_info);

// const services_card_container = create("div", ["is__flex"]);
// services_card_container.setAttribute("id", "services_card_container");

let arr_cards: HTMLDivElement[] = [];
let cards_number = 4;
for (let i = 1; i <= cards_number; i++) {
    let card_icons: String[] = [icon_online, icon_budgeting, icon_onboarding, icon_api];
    let card_titles = ["Online Banking", "Simple Budgeting", "Fan Onboarding", "Open API"];
    let card_content = [
        "Our modern web and mobile application applications allow you to keep track of your finances wherever you are in the world",
        "See exactly where your moneys goes each month. Receive notifications when you're close to hitting your limits.",
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."];

        let icon = create("object", [
          "card-services_icon",
          "is_flx_cl",
          "has_x_end",
        ]); 
        icon.setAttribute("id", `card-services_icon_${i}`);
        icon.type = "image/svg+xml";
        icon.setAttribute("data", `${card_icons[i - 1]}`);

        let icon_container = create("div", [
            "card-services_icon_container", 
            "is_flx_cl", "has_x_end"], 
            icon);
        icon_container.setAttribute("id", `card-services_icon_container_${i}`);

    let title = create("span", ["card-services_title", "is_flx_cl", "has_x_end"]);
    title.setAttribute("id", `card-services_title_${i}`);
    title.innerText = card_titles[i - 1];
    let info = create("span", ["card-services_info", "is_flx_cl", "has_x_end"]);
    info.setAttribute("id", `card-services_info_${i}`);
    info.innerText = card_content[i - 1];

    //FIXME:is__flex must be on first instead of card-services for specificity. 
    //Change this by adopting more specific flex classes.
    let element = create("div", ["card", "card-services", "is_flx_cl", "has_x_strt"]);
    element.setAttribute("id", `services_card_${i}`);
    element.append(icon_container, title, info);
  
  arr_cards.push(element);
}
const [card_1, card_2, card_3, card_4] = [...arr_cards];
const services_cards = create("div", ["is__flex", "on__sides"]);
services_cards.setAttribute("id", "services_cards");
services_cards.append(card_1, card_2, card_3, card_4);

const services_container = create("div", ["is__flex"]);
services_container.setAttribute("id", "services_container");
services_container.append(services_message, services_cards);

const services = create('section', ["is__flex"]);
services.setAttribute("id", "services");
services.appendChild(services_container);

export { services };