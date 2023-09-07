import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import ExpenseCalculation from '../pages/BudgetCalculator/ExpenseCalculation';
import ContentLibrary from '../pages/ContentLibrary/ContentLibrary';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/budget" element={<ExpenseCalculation />} />
        <Route path="/library" element={<ContentLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}
