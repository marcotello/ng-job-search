import {Component, inject, Signal} from '@angular/core';
import {JobListingComponent} from "../job-listing/job-listing.component";
import {Job} from "../../models/job.model";
import {ActivatedRoute} from "@angular/router";

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

  protected jobsSignal: Signal<Job[]> = inject(ActivatedRoute).snapshot.data['jobs'];
}
