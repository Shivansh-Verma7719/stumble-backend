import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import likeRouter from "./like/like";
import authRouter from "./auth/auth";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: 'http://stumble-ashoka.tech',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript Server" });
});

// Mount the like router
app.use("/like", likeRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use("/", authRouter);
