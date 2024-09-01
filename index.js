const express = require("express");
const app = express();
const db = require("./db");
const Dotenv = require("dotenv");

Dotenv.config()
const PORT = process.env.PORT || 5000;


//middele to parse incoming data in http requests
app.use(express.json());

app.get("/", function (req, res) {
  return res.send("welcome to monday night raw");
});



//this is routes for the application
const personRoutes = require("./Routes/personRoutes")

const menuRoutes = require("./Routes/menuRoutes")



app.use("/person",personRoutes)
app.use("/menu",menuRoutes)


app.listen(PORT, () => {
  console.log(`listening on port  ${PORT}`);
});
