require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const connectDB = require("./utils/connectDB");
const config = require("./configurations/config");
app.use(express.json());

const taskRouter = require("./routes/todo_router");
app.use("/", taskRouter);

connectDB()
  .then(() => {
    console.log("Connected to DATABASE");
    const port = config.PORT || 5000;
    app.listen(port, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
