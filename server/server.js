require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("./db");
const router = require("./routes");




app.get("/",(req,res)=>{
     res.send("server start")
 });


// middleware
app.use(express.json())
app.use(cors());

app.use(router);



// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});