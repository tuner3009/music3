import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { PublicHome } from '../pages/PublicHome';
import { CreatePage } from '../pages/Create';
import { DashboardPage } from '../pages/Dashboard';
import { LibraryPage } from '../pages/Library';
import { ExplorePage } from '../pages/Explore';
import { PricingPage } from '../pages/Pricing';
import { SettingsPage } from '../pages/Settings';
import { BillingPage } from '../pages/Billing';
import { AccountPage } from '../pages/Account';
import { SEOPage } from '../pages/SEOPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<PublicHome />} />
      <Route path='/:locale' element={<AppShell />}>
        <Route index element={<Navigate to='create' replace />} />
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path='create' element={<CreatePage />} />
        <Route path='library' element={<LibraryPage />} />
        <Route path='explore' element={<ExplorePage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='billing' element={<BillingPage />} />
        <Route path='account' element={<AccountPage />} />
      </Route>
      <Route path='/:locale/seo/:slug' element={<SEOPage />} />
    </Routes>
  );
}
