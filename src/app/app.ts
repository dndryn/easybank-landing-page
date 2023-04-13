console.log("...hooked on!");
import './components/card/card.scss'; // TODO: Remove this import when the card component is ready.
import "./index.scss";
import { header } from '@component/header';
import { main } from '@component/main';
import { footer } from '@component/footer';

// document.addEventListener("DOMContentLoaded", function() {
//     const app = document.body;
//     app.id = "app";
//     app?.append(header, main, footer);
// });

// TODO: Write an error handler that injects the message "app requires JavaScript to be enabled" 
// in case the browser has disabled Javascript.



const app = document.body;
app.id = "app";
app?.append(header, main, footer);

export default app;



