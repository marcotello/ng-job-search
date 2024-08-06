import { Routes } from '@angular/router';
import {fetchAllJobsResolver} from "./resolvers/fetch-all-jobs.resolver";

export const routes: Routes = [
  { path: '', redirectTo: '/job-listings', pathMatch: 'full' },
  {
    path: 'jobs', loadComponent: () => import('./jobs/jobs.component')
      .then(c => c.JobsComponent),
    resolve: { jobs: fetchAllJobsResolver}
  },
  {
    path: 'favorites', loadComponent: () => import('./favorites/favorites.component')
      .then(c => c.FavoritesComponent)
  },
  {
    path: 'jobs/:jobId',
    loadComponent: () => import('./job-details/job-details.component')
      .then(c => c.JobDetailsComponent)
  },
  { path: '**', redirectTo: '/job-listings', pathMatch: 'full' }
];
