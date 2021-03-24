//extension requirements
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");



//dotenv PORT setup
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const connectionURI = process.env.MONGODB_URI; 

//mongoose setup and connecting to database
const mongoose = require("mongoose");

const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

db.on("connected", function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

//router definitions and requirements
const indexRouter = require("./routes/index");
const rocksRouter = require("./routes/rocks");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(
    session({
        secret: "supersecret",
        resave: false,
        saveUninitialized: false,
    })
);

//Mount routers
app.use("/", indexRouter);
app.use("/rocks", rocksRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});