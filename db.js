const mongoose = require('mongoose');

require("dotenv").config();

//1. define the mongodb connection URl
// const mongoURl = process.env.DB_URl_local ;
const mongoURl = process.env.DB_URl;


//2.setup hte mongodb connection
mongoose.connect(mongoURl);

//get the default  connection

//3.mongoose maintain a default connnection object representing the MongoDb Connection

const db = mongoose.connection;
// console.log(db)

//4.define event listerners for database connection
db.on('connected',()=>{
    console.log("Connected to mongodB server");
})
db.on('error',(err)=>{
    console.log("MongoDb connection Error",err);
})
db.on('disconnected',()=>{
    console.log("MongoDb disconnected");
});


//exports the database connection
module.exports = db;
