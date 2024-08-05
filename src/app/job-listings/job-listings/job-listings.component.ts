import { Component } from '@angular/core';
import {JobListingComponent} from "../job-listing/job-listing.component";

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [
    JobListingComponent
  ],
  templateUrl: './job-listings.component.html',
  styleUrl: './job-listings.component.scss'
})
export class JobListingsComponent {

}
