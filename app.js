const EventEmitter = require("events");
const emitter = new EventEmitter();
//Register a listener
emitter.on("messageLogged", function (arg) {
  console.log("listener Called", arg);
});

const log = require("./logger");
log("message");
