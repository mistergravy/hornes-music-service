const express = require("express");

let app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("dist"));

app.listen(PORT, () => console.log("Listening on port " + PORT));