import { connect } from "mongoose";
import { config } from "../config/config.js";

export const myConnection = async () => {
  try {
    await connect(config.URL);
    console.log(`connected to the database`);
  } catch (e) {
    console.log(`error connecting to the db: ${e}`);
  }
};
