import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  { path: 'dashboard', component: LayoutComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
