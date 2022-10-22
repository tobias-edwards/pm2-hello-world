const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (_, res) {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
