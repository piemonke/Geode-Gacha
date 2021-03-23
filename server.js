//extension requirements
const express = require("express");
const morgan = require("morgan");

//dotenv setup
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const connectionURI = process.env.MONGODB_URI; 

// const session = require("express-session");

//router definitions and requirements
const indexRouter = require("./routes/index");
const rocksRouter = require("./routes/rocks");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//Mount routers
app.use("/", indexRouter);
app.use("/rocks", rocksRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});