import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import ExpenseCalculation from '../pages/BudgetCalculator/ExpenseCalculation';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/budget" element={<ExpenseCalculation />} />
      </Routes>
    </BrowserRouter>
  );
}
