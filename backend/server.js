const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require('cors')
const app = express();


const PORT = process.env.PORT
const productRoutes=require('./routes/productRoutes')
connectDB();

app.use(cors())
app.use(express.json())
app.use('/api/products',productRoutes)


app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});