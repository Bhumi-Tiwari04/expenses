const Expense=require("../models/Expense");


const singleExpense=async(req,res)=>{
    try {
        const a=await Expense.findById(req.params.id);
        if(!a){
           return res.status(404).json({Messege:"expense not found"});
        }
        res.status(200).json(a);
    }catch(Err){
        res.status(400).json(Err);
    }
}

const expenses=[
    {
        id:1,
        title:"Chai",
        amount:20
    },
    {
        id:2,
        title:"Biscuit",
        amount:30
    }
];
let nextId=3;

function getExpense(req,res){
    res.json(expenses);
}

function addExpense(req,res){

    if(!req.body.title){
    return  res.status(400).json({messege:"Title de be sale"});
    }
    if(typeof req.body.amount!=="number"){
      return  res.status(400).json({Messege:"numeric value daal be"});
    }

    const newExpense={
        id:nextId,
        title:req.body.title,
        amount:req.body.amount
    }
    nextId+=1;

    expenses.push(newExpense);
    res.status(201).json(newExpense);
}

function deleteExpense(req,res){
    let index=-1;
    const id=Number(req.params.id);
    for(a of expenses){
        if(a.id===id){
            index=a.id;
        }
    }
    if(index===-1){
      return  res.status(404).json({messege:"NOT FOUND"});
    }

    expenses.splice(index,1);
    res.status(201).json({messege:"found it"});
}

function totalExpense(req,res){
    const sum=expenses.reduce((curr,next)=>curr+next.amount,0);
    res.json({sum:sum});
}

function updateExpense(req,res){
    const id=Number(req.params.id);
    let index=-1;

    if(!req.body.title){
        return res.status(400).json({Messege:"put title biroooooooo"});
    }

    if(typeof req.body.amount!=="number"){
       return res.status(400).json({Messege:"put numeric value birooooooo"});
    }

    for( let i=0;i<expenses.length;i++){
        if(expenses[i].id===id){
            index=i;
        }
    }
    if(index===-1){
       return res.status(404).json({messege:"id nahi mili"});
    }
    expenses[index].title=req.body.title;
    expenses[index].amount=req.body.amount;
    res.json(expenses[index]);
}

module.exports={deleteExpense,addExpense,getExpense,totalExpense,updateExpense,singleExpense};