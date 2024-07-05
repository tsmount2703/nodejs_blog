const express = require("express");
const app = express();
const port = 5000;

app.get("/trang-chu", (req, res) => res.send("Hello World!!I am Trung Son"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
