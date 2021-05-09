//dependencies
const express = require("express");
const app = express();
const router = require("./routers");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const db = require("./config/keys").MongoURI;

//connecting to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

//midlewares
app.use("/", router);

//it redirects the user to game if the url was not correct
app.use(function (req, res, next) {
  res.status(404).redirect("/game");
});

//listening
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
