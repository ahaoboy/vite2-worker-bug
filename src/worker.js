import random from "lodash-es";
import msg from "./msg.js";

// only in this way it works
// const msg = "hello";
// const random = Math.random;

let a = 666;
console.log("worker");
self.addEventListener(
  "message",
  function (e) {
    self.postMessage("You said: " + e.data + a + msg + random(0, a++));
  },
  false
);
