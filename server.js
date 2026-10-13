require("dotenv").config();
const mongoose=require("mongoose")
.connect(process.env.MONGO_URI)
.then(()=>console.log("MONGODB CONNECTED"))
.catch((err)=>console.log("an error occured",err));
const express=require("express");
 const app=express();
 app.use(express.json());

const expenseRoute=require("./routes/expenseRoutes.js");
app.use("/expenses",expenseRoute);
 app.listen(process.env.PORT, ()=>{
    console.log("code is running ding ding ding ");
 })