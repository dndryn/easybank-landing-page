// FIXME: When classes gets an empty string trow an error
// TODO: Implement overloads to allow choosing between a 'content' element or an array of 'content'.

export default function create<K extends keyof HTMLElementTagNameMap>
( tag: K, classes?: Array<string>, content?: HTMLElement | string ) {

  let element = document.createElement(`${tag}`) as HTMLElementTagNameMap[K]; 

  if (classes) {element.classList.add(...classes)};

  if (content instanceof HTMLElement) {element.append(content)}

  else if (typeof content == "string") {element.innerText = `${content}`};

  return element;
}

// Previusly:
// (content instanceof HTMLElement) ? element.innerHTML = content.outerHTML: element.innerText = `${content}`;
// (content instanceof HTMLElement) ? element.append(content) : element.innerText = `${content}`;
