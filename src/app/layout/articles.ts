import create from "../services/create.js";

const articles_message = create("div", ["is_flx_cl", "has_x_end"], 
create("h2", ["section_title","is_flx"], "Latest Articles"));
articles_message.setAttribute("id", "articles_message");
articles_message.querySelector("h2")?.setAttribute("id", "articles_title");

let arr_cards: HTMLDivElement[] = [];
let cards_number = 4;
for (let i = 1; i <= cards_number; i++) {
    let card_images = ["currency", "restaurant", "plane", "confetti"];
    let authors = ["Claire Robins", "Wilson Hutton", "Wilson Hutton", "Claire Robins"];
    let titles = [
        "Receive money in any currency with no fees",
        "Treat yourself without worrying about money",
        "Take your Easybank card wherever you go",
        "Our invite-only Beta accounts are now live!"
    ];
    let contents = [
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money as a single ",
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ",
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ",
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site "
    ];

    
    let card_image = create("img", ["card-article_img"]);
    card_image.setAttribute("id", `card-article_img${i}`);
    card_image.src = `../src/assets/jpg/image-${card_images[i-1]}.jpg`;
    card_image.alt = `${
      card_images[i - 1][0].toUpperCase() + card_images[i-1].substring(1)
    }'s image`;

    let article_author = create("span", ["card-article_author","is_flx"]);
    article_author.setAttribute("id", `article_author_${i}`);
    article_author.innerText = `By ${authors[i-1]}`;

    let article_title = create("a", ["card-article_title", "is_flx"]);
    article_title.setAttribute("href", "#");
    article_title.setAttribute("id", `article_title_${i}`);
    article_title.innerText = titles[i-1];

    let card_text = create("span", ["card-article_text", "is_flx"]);
    card_text.setAttribute("id", `card-article_text_${i}`);
    card_text.innerText = contents[i-1];

    let card_content = create("div", ["card-article_content","is_flx", "has_x_cntr", "has_y_cntr"], 
        create("div", ["card-article_content_cntr", "is_flx_cl", "has_x_spcd"]));
        card_content.setAttribute("id", `card_content_${i}`);
        card_content.querySelector("div")?.setAttribute("id", `card-article_content_cntr_${i-1}`);
        card_content.querySelector("div")?.append(article_author, article_title, card_text);

    let card = create("div", ["card", "card-article", "is_flx_cl"]);
    card.setAttribute("id", `articles_card_${i}`)
    card.append(card_image, card_content);
    arr_cards.push(card);
}
const [card_1, card_2, card_3, card_4] = [...arr_cards]
const articles_cards = create("div", ["is_flx_rw", "has_x_spcd"]);
articles_cards.setAttribute("id", "articles_cards");
articles_cards.append(card_1, card_2, card_3, card_4);

const articles_container = create("div", ["is_flx_cl", "has_x_strt"]);
articles_container.setAttribute("id", "articles_container");
articles_container.append(articles_message, articles_cards);

const articles = create("section", ["is_flx", "has_x_cntr"]);
articles.setAttribute("id", "articles");
articles.appendChild(articles_container);

export { articles }
