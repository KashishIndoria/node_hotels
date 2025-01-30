const mongoose =require('mongoose');
require('dotenv').config();

//const mongoURL = 'mongodb://localhost:27017/hotels';
const uri = process.env.DB_URL; 


mongoose.connect(uri, {
    tls: true  // Add this if needed
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

const db = mongoose.connection;


module.exports = db;