require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const stockRoutes = require("./routes/stockRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth",authRoutes);

app.use("/api/stocks", stockRoutes);

app.get("/",(req,res)=>{
    res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});