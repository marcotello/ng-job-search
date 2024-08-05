import { Routes } from '@angular/router';
import {fetchAllJobsResolver} from "./resolvers/fetch-all-jobs.resolver";

export const routes: Routes = [
  { path: '', redirectTo: '/job-listings', pathMatch: 'full' },
  { path: 'job-listings', loadComponent: () => import('./jobs/jobs.component')
      .then(m => m.JobsComponent),
    resolve: { jobs: fetchAllJobsResolver}
  },
  { path: '**', redirectTo: '/job-listings', pathMatch: 'full' }
];
