import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ActivityLoader } from '../components/layout/ActivityLoader';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity/:activityId" element={<ActivityLoader />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
