const app = require("./app.js");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/caRent", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is connected!"))

  .catch((err) => console.error(err));

app.listen(3000, () => {
  console.log("Server is up on Port 3000");
});
