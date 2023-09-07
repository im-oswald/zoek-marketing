import React, { useState } from 'react';
import './ExpenseCalculation.css';
import CalculatorView from '../CalculatorView';
import ExpenseListView from '../ExpenseListView';
import { Expense } from '../Expense';

const ExpenseCalculation: React.FC = () => {
  const [income, setIncome] = useState<number | string>('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseName, setExpenseName] = useState<string>('');
  const [expenseAmount, setExpenseAmount] = useState<number | string>('');
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const generateExpenseId = () => {
    return new Date().getTime();
  };

  const addExpense = () => {
    if (expenseName && expenseAmount !== '' && !isNaN(Number(expenseAmount))) {
      const newExpenseAmount = Number(expenseAmount);
      const newExpense: Expense = {
        id: generateExpenseId(),
        name: expenseName,
        amount: newExpenseAmount
      };
      setExpenses([...expenses, newExpense]);
      setTotalExpenses(totalExpenses + newExpenseAmount);
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const editExpense = (expense: Expense) => {
    setEditingExpense(expense);
    setExpenseName(expense.name);
    setExpenseAmount(expense.amount);
    setIsEditing(true);
  };

  const updateExpense = () => {
    if (
      editingExpense &&
      expenseName &&
      expenseAmount !== '' &&
      !isNaN(Number(expenseAmount))
    ) {
      const updatedExpenses = expenses.map((expense) =>
        expense.id === editingExpense.id
          ? { ...expense, name: expenseName, amount: Number(expenseAmount) }
          : expense
      );
      setExpenses(updatedExpenses);
      setTotalExpenses(
        updatedExpenses.reduce((total, expense) => total + expense.amount, 0)
      );
      setExpenseName('');
      setExpenseAmount('');
      setEditingExpense(null);
      setIsEditing(false);
    }
  };

  const deleteExpense = (id: number) => {
    const deletedExpense = expenses.find((expense) => expense.id === id);
    if (deletedExpense) {
      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(updatedExpenses);
      setTotalExpenses(totalExpenses - deletedExpense.amount);
    }
  };

  return (
    <div className="budget-body">
      <div className="budget-calculator">
        <h1>Budget Calculator</h1>

        <div className="calculator-and-list">
          {/* Calculator View */}
          <div className="calculator-view">
            <CalculatorView
              income={income}
              expenseName={expenseName}
              expenseAmount={expenseAmount}
              totalExpenses={totalExpenses}
              onIncomeChange={(e) => setIncome(e.target.value)}
              onExpenseNameChange={(e) => setExpenseName(e.target.value)}
              onExpenseAmountChange={(e) => setExpenseAmount(e.target.value)}
              onAddExpense={isEditing ? updateExpense : addExpense}
              isEditing={isEditing}
            />
          </div>

          {/* Expense List View */}
          <div className="list-view">
            <ExpenseListView
              expenses={expenses}
              onEdit={editExpense}
              onDelete={deleteExpense}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCalculation;
