const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5100, () => {
  console.log("Sever started on Port: 5100");
});
