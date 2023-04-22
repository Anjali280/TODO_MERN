const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("SERVER IS RUNNIG");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
