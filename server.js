const express = require("express")
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.send('Welcome to my hotel !!!');
})

const menuRoutes = require('./models/routes/menuRoutes');
app.use(menuRoutes);

const personRoutes = require('./models/routes/personRoutes'); 
//importing personRoutes
app.use(personRoutes);
const port =process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is start on 3000 port !");
})