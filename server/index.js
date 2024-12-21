const express=require("express");
const app=express();

const database=require("./config/database");
const cors=require("cors");
const dotenv = require("dotenv");


dotenv.config();

const PORT =process.env.PORT || 5000;

database.connect();

app.use(express.json());


app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);


app.get("/",(req,res) =>{
    return res.json({
        success:true,
        message:"your server is running at port no.."
    })
})

app.listen(PORT, () =>{
    console.log(`app is running at port no ${PORT}`)
})