import { connect } from "mongoose";
import "dotenv/config.js";
const mongoURL = process.env.MONGO_URL;

const connectToMongo = async () => {
  try {
    await connect(mongoURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
export default connectToMongo;
