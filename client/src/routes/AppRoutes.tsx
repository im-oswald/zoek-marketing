import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
