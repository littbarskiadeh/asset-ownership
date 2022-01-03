const app = require("./app");
const db = require("./db/DBConnection");
const logger = require('./logger');

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), (port) => {
  logger.info(`Express server started and running! PORT ${app.get("port")}`);
  // logger.warn(`I am a warn log message`);
  // logger.error(`I am an error log message`);
});
