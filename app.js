const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = 3000;
app.listen(port, () => {
  console.log("My first express app is listening on port: " + port);
});
