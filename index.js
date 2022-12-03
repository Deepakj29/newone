const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const connectDB = require("./db");




// app.use(express.urlencoded({extended: false}));
// app.use(express.json());


app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/users");
app.use("/api/users",userRoutes);
 
const authRoutes = require("./routes/auth");
app.use("/api/auth",authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Connecting on port ${port}...`));