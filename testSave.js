require('dotenv').config();
const mongoose=require("mongoose");
const Expense=require("./models/Expense");

// async function run(){
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("connected");

//     const saved=await Expense.create({title:"halwa",amount:203});
//     console.log(saved);

//     await mongoose.disconnect();
//     console.log("disconnected");
// }

// run();
async function eat(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
// Chai 20 rupay category Food, aur Bus 50 rupay category Travel
    const food1=await Expense.create({title:"chai",amount:"20",category:"Food"});
    console.log(food1);
    const food2=await Expense.create({title:"Momos",amount:"abc",category:"Food"});
    console.log(food2)

    await mongoose.disconnect();
    console.log("disconnect");
}

eat();