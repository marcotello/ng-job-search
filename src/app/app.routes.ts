import { Routes } from '@angular/router';
import {fetchAllJobsResolver} from "./resolvers/fetch-all-jobs.resolver";

export const routes: Routes = [
  { path: '', redirectTo: '/job-listings', pathMatch: 'full' },
  { path: 'job-listings', loadComponent: () => import('./job-listings/job-listings/job-listings.component')
      .then(m => m.JobListingsComponent),
    resolve: { jobs: fetchAllJobsResolver}
  },
  { path: '**', redirectTo: '/job-listings', pathMatch: 'full' }
];
