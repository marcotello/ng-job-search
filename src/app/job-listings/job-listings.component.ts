import {Component, input} from '@angular/core';
import {JobListingComponent} from "../job-listing/job-listing.component";
import {Job} from "../models/job.model";

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

  jobs = input.required<Job[]>();
}
