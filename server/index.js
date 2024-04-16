const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5100, () => {
  console.log("Sever started on Port: 5100");
});
