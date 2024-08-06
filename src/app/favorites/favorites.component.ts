import {Component, inject, Signal} from '@angular/core';
import {JobListingsComponent} from "../job-listings/job-listings.component";
import {Job} from "../models/job.model";
import {FavoritesService} from "../services/favorites.service";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    JobListingsComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  protected favoritesSignal = inject(FavoritesService).getFavoriteJobs();

}
