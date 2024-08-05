import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', loadComponent: () => import('./job-listings/job-listings/job-listings.component')
      .then(m => m.JobListingsComponent) },
  { path: '**', redirectTo: '/jobs', pathMatch: 'full' }
];
