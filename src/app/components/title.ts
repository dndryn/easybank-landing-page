import create from "../services/create.js";

const title = create('h1', ['is', 'test']);
title.innerText = 'Next generations digital banking';
title.setAttribute('id', "hero__title");

export { title as hero__title };
