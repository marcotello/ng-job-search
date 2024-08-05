import {Component, signal} from '@angular/core';
import {JobListingsComponent} from "../job-listings/job-listings.component";
import {Job} from "../models/job.model";

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
  protected favoritesSignal = signal<Job[]>([]);
}
