const express=require("express");
const router=express.Router();

const {getExpense, deleteExpense, addExpense,totalExpense,updateExpense,singleExpense}=require("../controllers/expenseController");
router.get("/",getExpense);
router.post("/",addExpense);
router.delete("/:id",deleteExpense);
router.get("/total",totalExpense);
router.put("/:id",updateExpense);
router.get("/:id",singleExpense);

module.exports =router;