import { main, overlay, menu } from '@component/main';
import '@style/menu';

const toggle: HTMLAnchorElement = (() => {
    let active: boolean = false;
    const array: HTMLSpanElement[] = [];
    const span = document.createElement("span");

    for (let i = 1; i <= 3; i++) {
    let copy = span.cloneNode() as HTMLSpanElement;
    copy.setAttribute("id", `span_${i}`);
    array.push(copy);
  }

  const element = document.createElement("a");
  element.setAttribute("id", "menu__toggle");
  element.append(...array);
  main.appendChild(overlay);

  function handle_Click(e){
    //TODO: remove child element when it's unused.
    if (!active) {
      console.log("menu opened");
      element.classList.toggle("is-open");
      overlay.setAttribute("id", "menu__overlay--visible");
      menu.classList.remove("menu--hidden");
      menu.classList.add("menu--visible");
      document.body.style.overflowY = "hidden";
      active = true;
    } else {
      console.log("menu closed");
      element.classList.toggle("is-open");
      menu.classList.remove("menu--visible");
      menu.classList.add("menu--hidden");
      overlay.setAttribute("id", "menu__overlay--hidden");
      document.body.style.overflowY = "auto";
      active = false;
    }
  }
 element.addEventListener("click", handle_Click);
 overlay.addEventListener("click", handle_Click);
 return element;
})();

export { toggle };