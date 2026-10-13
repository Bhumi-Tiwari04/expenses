const mongoose=require('mongoose');

const expenseSchema=new mongoose.Schema(
    {
        title:{type:String,required:true},
        amount:{type:Number,required:true},
        category:{type:String},
        note:{type:String},
    },
    {
        timestamps:true,
    }
);
const Expense=mongoose.model('Expense',expenseSchema);

module.exports=Expense;