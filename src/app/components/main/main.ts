import "./main.scss";
import create from '@utils/create';
import { hero } from '@component/hero'
import { services } from '@component/services';
import { articles } from '@component/articles';


const main = create('main', ["is__flex"]);
main.id = 'app-main';
main.append(hero, services, articles);

export { main };