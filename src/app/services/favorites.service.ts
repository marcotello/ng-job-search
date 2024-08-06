import {effect, inject, Injectable, signal} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Job} from "../models/job.model";
import {JobsHttpService} from "./jobs-http.service";
import {JobId, JobIds} from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private localStorageService = inject(LocalStorageService);
  private jobsHttpService = inject(JobsHttpService);

  private favoritesSignal = signal<JobIds>(this.localStorageService.get());

  favorites = this.favoritesSignal.asReadonly();

  constructor() {
    effect(() => {
      this.localStorageService.set(this.favoritesSignal());
    });
  }

  toggleFavorite(id: JobId): void {
    const index = this.favoritesSignal().indexOf(id);

    if (index !== -1) {
      this.favoritesSignal.update((favorites) => favorites.filter((favorite) => favorite !== id));
    } else {
      this.favoritesSignal.update((favorites) => [...favorites, id]);
    }
  }
}
