const express = require("express");
const path = require("path");
const app = express();
const HOST = process.env.HOST || "0.0.0.0";
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(2903, HOST, console.log("Server is starting at port 2903..."));
