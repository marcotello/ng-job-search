import {effect, inject, Injectable, Signal, signal} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {JobId, JobIds} from "../types/types";
import {JobsService} from "./jobs.service";
import {forkJoin} from "rxjs";
import {Job} from "../models/job.model";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private localStorageService = inject(LocalStorageService);
  private jobsService = inject(JobsService);

  private favoriteJobIdsSignal = signal<JobIds>(this.localStorageService.get());
  private favoriteJobsSignal = signal<Job[]>([]);

  favoriteJobIds = this.favoriteJobIdsSignal.asReadonly();

  constructor() {
    effect(() => {
      this.localStorageService.set(this.favoriteJobIdsSignal());
    });
  }

  toggleFavorite(id: JobId): void {
    const index = this.favoriteJobIdsSignal().indexOf(id);

    if (index !== -1) {
      this.favoriteJobIdsSignal.update((favorites) =>favorites.filter((favorite) => favorite !== id));
    } else {
      this.favoriteJobIdsSignal.update((favorites) => [...favorites, id]);
    }
  }

  getFavoriteJobs(): Signal<Job[]> {
    const favoriteJobIds = this.favoriteJobIdsSignal();

    const favoriteJobDetails$ =
      favoriteJobIds.map(jobId => this.jobsService.getJobByIdObservable(jobId));

    forkJoin(favoriteJobDetails$)
      .subscribe(jobs => {
        this.favoriteJobsSignal.set(jobs);
      });

    return this.favoriteJobsSignal.asReadonly();
  }
}
