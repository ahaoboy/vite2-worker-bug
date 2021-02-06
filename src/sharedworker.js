import random from "lodash-es";
import msg from "./msg";
let a = 666;
onconnect = function (e) {
  const port = e.ports[0];
  port.postMessage(a);
  console.log("shared-worker");
  port.onmessage = () => {
    port.postMessage("You said: " + e.data + a + msg + random(0, a++));
  };
};
