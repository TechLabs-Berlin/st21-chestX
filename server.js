const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");

// needed so that we can use a .env file
require("dotenv").config();

global.__basedir = __dirname;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const xRayFile = require("./app/models/dataSchema");

// set port, listen for requests
const PORT = process.env.PORT || 8081;

const corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

const initRoutes = require("./app/routes/xRayFile.routes");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// we are granting access to the image folder to be accessible when a request is made
const path = require("path");
app.use(express.static(path.join(__dirname, "frontend-chest-X", "dist")));
app.use("/public", express.static(path.join("public")));

// Establishing connection to database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Open!!!");
  })
  .catch((e) => {
    console.log("MongoDB Connection Error!!");
    console.log(e);
  });

app.get("/", (req, res) => {
  res.send("chest-X app");
});

// connection to python script
app.get("/name", (req, res) => {
  let spawn = require("child_process").spawn;
  let process = spawn("python", [
    "./python-files/data_io_pipeline.py",
    req.query.firstname,
    req.query.lastname,
  ]);
  process.stdout.on("data", (data) => {
    res.send(data.toString());
    console.log(data);
  });
});

// setting up heroku
// express.static is responsible for sending static files requests to the client
// app.use(express.static(path.join(__dirname, "frontend-chest-X", "build")));

// responsible for sending the main index file back to the client
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend-chest-X", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
