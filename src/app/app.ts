console.log("...hooked on!");
import { header } from '@component/header';
import { main } from '@component/main';
import { footer } from '@component/footer';
import '@style/index';

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



