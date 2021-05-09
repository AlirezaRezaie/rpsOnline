const express = require("express");
const app = express();
const router = require("./public/routers");

app.use("/", router);
