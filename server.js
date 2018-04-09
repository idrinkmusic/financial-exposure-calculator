const express = require("express");
const app = express();

app.get("/api/person/:input", (req, res) => {
  res.send({
    val1: req.params.input * 1.5,
    val2: req.params.input * 2
  });
});

app.get("/api/facility/:val1", (req, res) => {
  res.send({
    val3: req.params.val1 * 1.5,
    val4: req.params.val1 * 2
  });
});

app.get("/api/exposure/:val2", (req, res) => {
  res.send({
    val5: req.params.val2 * 2
  });
});

app.listen(3001, () => console.log("Example app listening on port 3001!"));
