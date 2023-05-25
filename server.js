const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

const connect = async () =>{
  try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
          console.log("connected to mongoDB".green.bold);
    } catch (error) {
      throw error;
    }
};

mongoose.connection.on('disconnected', () => {
  console.log(`mongodb disconnected`.red.bold);
});



const port = process.env.PORT || 50000;

app.listen(port, () => {
  connect(); 
  console.log(`App is running on port ${port}`.yellow.bold);
}); 