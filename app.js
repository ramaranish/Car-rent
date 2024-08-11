const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

const uRoutes = require("./routes/userRoute.js");
const cRoutes = require("./routes/carRoute.js");

app.use("/user", uRoutes);
app.use("/car", cRoutes);

app.get("/car/getData", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/results.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/admin.html"));
});

app.use((err, req, res, next) => {
  console.log(err);

  if (typeof err == "string") {
    return res.status(400).send({
      message: err,
    });
  }

  return res.status(400).send({
    message: err.message,
  });
});

module.exports = app;
