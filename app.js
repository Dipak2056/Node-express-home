const EventEmitter = require("events");
const emitter = new EventEmitter();
//Register a listener
emitter.on("messageLogged", function () {
  console.log("listener Called");
});
//Raise an event
emitter.emit("messageLogged");

//we cannot register a listener after raising the event
//because what happens, raising the event function go and iterate all the
//linesof code which are registerring before it
