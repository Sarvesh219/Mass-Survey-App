const express = require("express");
const app = express();

// route handler
app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT); // express tells node to watch for traffic on port 5000
