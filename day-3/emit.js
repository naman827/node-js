const EVENTEMITTER = require("events");

const emitter = new EVENTEMITTER();

emitter.on("GREET", (args) => {
  console.log(`hello ${args.username},${args.id}`);
});

emitter.emit("GREET", {
  username: "naman",
  id: 268767573686,
});
