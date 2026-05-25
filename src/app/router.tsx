import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ActivityLoader } from '../components/layout/ActivityLoader';
import { SettingsPage } from '../pages/SettingsPage';
import { ParentDashboard } from '../pages/ParentDashboard';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity/:activityId" element={<ActivityLoader />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
