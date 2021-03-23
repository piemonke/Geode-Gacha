const express = require("express");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const connectionURI = process.env.MONGODB_URI; 

// const session = require("express-session");

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));



app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});