import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'wallet', pathMatch: 'full' },
  { path: 'dashboard', data: { title: 'Dashboard' }, loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'wallet', data: { title: 'Wallet' }, loadChildren: 'app/pages/wallets/wallets.module#WalletsModule' },
  { path: '**', component: ErrorComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  preloadingStrategy: PreloadAllModules,
  useHash: true
});