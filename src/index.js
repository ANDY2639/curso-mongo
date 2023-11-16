import app from "./app.js";
import { config } from "./config/config.js";
import { myConnection } from "./db/conn.js";

// Connect to mongo database
myConnection();

app.listen(config.PORT, () => {
  console.log(`Example app listening on URL: http://localhost:${config.PORT}`);
});
