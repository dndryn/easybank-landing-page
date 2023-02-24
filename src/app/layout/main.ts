import create from '../services/create.js';
import { hero } from '../layout/hero.js'
import { services } from '../layout/services.js';
import { articles } from './articles.js';


const main = create('main', ["is__flex"]);
main.id = 'app-main';
main.append(hero, services, articles);

export { main };