import {inject, Injectable, Signal, signal} from '@angular/core';
import {Job} from "../models/job.model";
import {JobsHttpService} from "./jobs-http.service";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private jobsHttpService = inject(JobsHttpService);

  private jobsSignal = signal<Job[]>([]);

  public getJobs(): Signal<Job[]> {
    this.jobsHttpService.getJobsFromAPI()
      .subscribe(data => {
        this.jobsSignal.set(data);
      });

    return this.jobsSignal.asReadonly();
  }
}
