import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
//importo las rutas
import products from "../routes/products.Router.js";
import users from "../routes/user.Router.js";
import review from "../routes/review.Router.js";
import market from "../routes/market.Router.js";
import perfiles from "../routes/perfiles.router.js";
import price from "../routes/price.router.js";
const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ! se puede cambiar  "*" para habilitar todos los puertos y evitar problemas de CORS
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  next();
});

server.use("/user", users);
server.use("/reviews", review);
server.use("/perfiles", perfiles);
server.use("/products", products);
server.use("/price", price);
server.use("/market", market);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
