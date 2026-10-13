const Expense = require("../models/Expense");

const getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const singleExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const totalExpense = async (req, res) => {
  try {
    const expenses = await Expense.find();
    let sum = 0;
    for (const item of expenses) {
      sum += item.amount;
    }
    res.status(200).json({ sum: sum });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExpense,
  singleExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  totalExpense,
};