import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config()
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

db.on("error", (err) => {
  console.log(err);
});

db.once("connected", () => {
  console.log(`DB Connected`);
});

const PORT = process.env.PORT || 5000;

const listen = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
