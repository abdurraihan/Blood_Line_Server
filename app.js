const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors");

const { red } = require("colors");


//middleware 
app.use(express.json());
app.use(cors());


// router 
const donnerRouter = require('./router/donner_router.js');
const bloodSearchRouter = require('./router/bloodSearch_router.js');


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});



// posting to database 

app.use('/donner',donnerRouter);
app.use('/bloodSearch',bloodSearchRouter)


module.exports = app;