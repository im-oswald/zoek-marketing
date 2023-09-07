import React from 'react';
import './ExpenseListView.css';
import { Expense } from '../Expense';

interface ExpenseListViewProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (id: number) => void;
}

const ExpenseListView: React.FC<ExpenseListViewProps> = ({
  expenses,
  onEdit,
  onDelete
}) => {
  return (
    <div className="expense-list-view">
      <h2>Expense List</h2>
      <table>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>${expense.amount}</td>
              <td>
                <button onClick={() => onEdit(expense)}>Edit</button>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseListView;
