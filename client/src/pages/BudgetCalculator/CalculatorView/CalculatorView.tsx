// src/components/BudgetCalculatorView.tsx

import React from 'react';
import './CalculatorView.css';

interface CalculatorViewProps {
  income: number | string;
  expenseName: string;
  expenseAmount: number | string;
  totalExpenses: number;
  onIncomeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpenseNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpenseAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddExpense: () => void;
  isEditing: boolean;
}

const CalculatorView: React.FC<CalculatorViewProps> = ({
  income,
  expenseName,
  expenseAmount,
  totalExpenses,
  onIncomeChange,
  onExpenseNameChange,
  onExpenseAmountChange,
  onAddExpense,
  isEditing
}) => {
  return (
    <div>
      <h2>Income</h2>
      <input
        type="number"
        min={0}
        value={income as number}
        onChange={onIncomeChange}
      />

      <h2>Expenses</h2>
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={onExpenseNameChange}
      />
      <input
        type="number"
        placeholder="Expense Amount"
        min={0}
        value={expenseAmount as string}
        onChange={onExpenseAmountChange}
      />
      <button onClick={onAddExpense}>
        {isEditing ? 'Update Expense' : 'Add Expense'}
      </button>

      <div className="budget-summary">
        <h2>Total Expenses: {totalExpenses}</h2>
        <h2>Remaining Budget: {(income as number) - totalExpenses}</h2>
      </div>
    </div>
  );
};

export default CalculatorView;
