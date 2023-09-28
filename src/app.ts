import "dotenv/config";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";
import AppDataSource from "./config/data.source";
import * as http from "http";
import cron from "node-cron";
import { Near, keyStores } from "near-api-js";
import nearUtils from "./shared/near.utils";
import WebSocket from "ws";

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/near", router);

AppDataSource.initialize().then(() => console.log("Conexion ORM Ready"));

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));

const ws = new WebSocket("wss://events.near.stream/ws");

ws.on("open", function open() {
  ws.send(
    JSON.stringify({
      secret: "ohyeahnftsss",
      filter: [
        {
          account_id: "usdt.tether-token.near",
          status: "SUCCESS",
          event: {
            standard: "nep141",
            event: "ft_transfer",
          },
        },
      ],
    }),
  );

  ws.on("message", function incoming(data) {
    console.log("Received: %s", data);
    // const data = JSON.parse(e.data);
  });
});

ws.on("message", function incoming(data) {
  console.log("Received: %s", data);
  // const data = JSON.parse(e.data);
  // console.log(data);
});

ws.on("error", function error(err) {
  console.error("WebSocket encountered an error: ", err);
});

ws.on("close", function error(err) {
  console.error("WebSocket encountered an error: ", err);
});
