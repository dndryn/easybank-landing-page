console.log("...hooked!");
import { header } from './layout/header.js';
import { main } from './layout/main.js';
import { footer } from './layout/footer.js';
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
