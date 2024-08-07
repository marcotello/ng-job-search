import {Component, inject, Input} from '@angular/core';
import {JobsService} from "../services/jobs.service";
import {JobDetails} from "../models/job-details.model";
import {Observable, tap} from "rxjs";
import {AsyncPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  private jobsService = inject(JobsService);

  protected jobDetails$: Observable<JobDetails> | undefined;
  protected jobCategories: string[] = [];

  @Input()
  set jobId(jobId: string) {
    const jobIdNumber = +jobId;

    if (!isNaN(jobIdNumber)) {
      this.jobDetails$ = this.jobsService.getJobByIdObservable(jobIdNumber)
        .pipe(
          tap(jobDetails => {
            this.jobCategories =  [...jobDetails.types, ...jobDetails.industries];
          })
        );
    } else {
      this.jobDetails$ = undefined;
    }
  }

  goBack() {
    history.back();
  }
}
