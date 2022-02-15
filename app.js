require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Router
var indexRouter = require("./src/routes/index");

// Middleware
import globalMiddleware from "./src/middleware/global";
import authMiddleware from "./src/middleware/auth";

var app = express();

app.use(globalMiddleware);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", authMiddleware, indexRouter);

module.exports = app;
