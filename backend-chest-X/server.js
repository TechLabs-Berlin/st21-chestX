const express = require("express");
const app = express();
const cors = require("cors");

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

// we are granting access to the image folder to be accessible when a request is made
const path = require("path");
app.use("/public", express.static(path.join("public")));

const initRoutes = require("./app/routes/xRayFile.routes");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// Establishing connection to database
mongoose
  .connect("mongodb://localhost:27017/chest-X", {
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
    "../python-files/data_io_pipeline.py",
    req.query.firstname,
    req.query.lastname,
  ]);
  process.stdout.on("data", (data) => {
    res.send(data.toString());
    console.log(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
