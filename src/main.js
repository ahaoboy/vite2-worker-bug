import { createApp } from "vue";
import App from "./App.vue";
// I use url to init a sharedworker, but also get import errorF 
// import SW from "./sharedworker.js?url";

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
