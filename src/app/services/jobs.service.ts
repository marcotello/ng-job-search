import {inject, Injectable, Signal, signal} from '@angular/core';
import {Job} from "../models/job.model";
import {JobsHttpService} from "./jobs-http.service";
import {Observable} from "rxjs";
import {JobDetails} from "../models/job-details.model";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private jobsHttpService = inject(JobsHttpService);

  private jobsSignal = signal<Job[]>([]);

  public getJobs(): Signal<Job[]> {
    this.jobsHttpService.getJobs()
      .subscribe(data => {
        this.jobsSignal.set(data);
      });

    return this.jobsSignal.asReadonly();
  }

  public getJobByIdObservable(jobId: number): Observable<JobDetails> {
    return this.jobsHttpService.getJobById(jobId);
  }
}
