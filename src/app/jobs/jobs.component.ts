import {Component, inject, Signal} from '@angular/core';
import {Job} from "../models/job.model";
import {ActivatedRoute} from "@angular/router";
import {JobListingsComponent} from "../job-listings/job-listings.component";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    JobListingsComponent
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  protected jobsSignal: Signal<Job[]> = inject(ActivatedRoute).snapshot.data['jobs'];
}
