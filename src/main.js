import { createApp } from "vue";
import App from "./App.vue";

// I use url to init a sharedworker, but also get import error
/*
import SW_URL from "./sharedworker.js?url";
const sw = new SharedWorker(SW_URL);
sw.port.start();
document.addEventListener("click", function () {
  sw.port.postMessage("sw");
});
sw.port.onmessage = function (val) {
  document.body.innerHTML = val.data;
};
*/

import Worker from "./worker?worker";
const worker = new Worker();
document.addEventListener("click", function () {
  console.log("click");
  worker.postMessage("click");
});
worker.onmessage = function (val) {
  document.body.innerHTML = val.data;
};
createApp(App).mount("#app");
