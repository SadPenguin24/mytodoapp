import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
//import path from "path";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import listRoutes from "./routes/listRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/lists", listRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

//connect mongodb
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
