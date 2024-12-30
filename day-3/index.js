const EVENTEMITTER = require("events");
const fs = require("fs");

const useremitter = new EVENTEMITTER();

const eventcount = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileupdate: 0,
};

const logfile = "eventlog.json";

// Load previous event counts if the file exists
if (fs.existsSync(logfile)) {
  const data = fs.readFileSync(logfile, "utf-8");
  Object.assign(eventcount, JSON.parse(data));
}

function savecount() {
  fs.writeFileSync(logfile, JSON.stringify(eventcount, null, 2));
}

// Event handlers
useremitter.on("LOGIN", (username) => {
  eventcount.login++;
  console.log(`${username} logged in successfully`);
  savecount();
});

useremitter.on("LOGOUT", (username) => {
  eventcount.logout++;
  console.log(`${username} logged out successfully`);
  savecount();
});

useremitter.on("PURCHASE", (username, product) => {
  eventcount.purchase++;
  console.log(`${username} purchased ${product}`);
  savecount();
});

useremitter.on("PROFILE_UPDATE", (username, field) => {
  eventcount.profileupdate++;
  console.log(`${username} updated their ${field} successfully`);
  savecount();
});

useremitter.on("SUMMARY", () => {
  console.log(`\nEvent Summary:`);
  console.log(`Login: ${eventcount.login}`);
  console.log(`Logout: ${eventcount.logout}`);
  console.log(`Purchase: ${eventcount.purchase}`);
  console.log(`Profile Update: ${eventcount.profileupdate}`);
});

// Emit events
useremitter.emit("LOGIN", "naman");
useremitter.emit("LOGOUT", "naman");
useremitter.emit("PURCHASE", "naman", "MacBook M4 chip");
useremitter.emit("PROFILE_UPDATE", "naman", "email address");
useremitter.emit("SUMMARY"); // Corrected typo
