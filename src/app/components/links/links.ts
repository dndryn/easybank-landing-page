import create from "@utils/create";
import { link_names } from "@utils/paths";
import "./nav.scss";

const nav_links = create("nav", ["is_flx_rw", "has_x_spcd", "has_y_cntr"]);
nav_links.id = "nav_links";

// Provides n link button to nav_links
let arr: HTMLAnchorElement[] = [];
// let names = ["home", "about", "contacts", "blog", "careers"];
let names = link_names;
const links_number = 5;

//TODO: Handle 'links' margin to add padding in both sides properly.

//TODO: Ad ogni elemento 'LI' innestarne uno 'A' (button)
//BUG: If using an imported button it show itself only on the last element of arr: 
// prova creando una variabile btn e assgna il button
for (let i = 0; i < links_number; i++) {
  let element = create(
    "a",
    ["button", "button_link", "nav_link", "is_flx", "has_x_cntr", "has_y_cntr"],
    `${names[i][0].toUpperCase() + names[i].substring(1)}`
  );
  
  element.setAttribute("id", `link-to_${names[i]}`)
  element.setAttribute("href", "#");
  arr[i] = element; // alt: arr.push(element);
}

//TESTING: links object
//TODO: implement an iterator generator for 'links
// let links: Record<string, HTMLLIElement> = {};
// let names = ["home", "about", "contacts", "blog", "careers"];
// for (let i = 0; i < names.length; i++) {links[names[i]] = arr[i];}
// const [home, about, contacts, blog, careers] = [...Object.values(links)];
// for (let link of links) {links[link].id = `link__${link}`}

const [home, about, contacts, blog, careers] = [...arr];
nav_links.append(home, about, contacts, blog, careers);

//TODO: dynamically assign each string to its corresponding id. For example:
    //  for (let element in arr) {
    //      element.id = `link__${element}`
    //     }

export { nav_links };
