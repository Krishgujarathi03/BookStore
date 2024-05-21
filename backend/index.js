import express from "express";
import "dotenv/config.js";
import connectToMongo from "./database/db.js";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";
import cors from "cors";

const app = express();
const port = process.env.PORT;

// Connect to Mongodb
connectToMongo();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware
app.use(cors());
app.use(express.json());

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
