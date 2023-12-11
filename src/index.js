import app from "./app.js";
import { config } from "./config/config.js";
import "./db/conn.js";

app.listen(config.PORT, () => {
  console.log(`Example app listening on URL: http://localhost:${config.PORT}`);
});
