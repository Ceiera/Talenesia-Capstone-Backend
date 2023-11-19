import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authsRoute from "./routes/auths.route.js";
import usersRoute from "./routes/users.route.js";
import batchesRouter from "./routes/batches.route.js";
import learningTracksRouter from "./routes/learningTracks.route.js";
import badgesRouter from "./routes/badges.route.js";
import userLibraryRouter from "./routes/userLibraries.route.js";
import userBadgesRouter from "./routes/userBadges.route.js";
import registerRouter from "./routes/register.route.js";

dotenv.config();
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

app.use("/register", registerRouter);
app.use("/login", authsRoute);

//api ADMIN untuk Populate
app.use("/users", usersRoute);
app.use("/batches", batchesRouter);
app.use("/learningtracks", learningTracksRouter);
app.use("/badges", badgesRouter);
app.use("/userlibraries", userLibraryRouter);
app.use("/userbadges", userBadgesRouter);

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
