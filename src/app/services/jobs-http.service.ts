import {inject, Injectable, signal, Signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../models/job.model";

@Injectable({
  providedIn: 'root'
})
export class JobsHttpService {

  private BASE_URL = 'http://localhost:4200';
  private GET_ALL_JOBS = this.BASE_URL + '/jobs';

  private jobsSignal = signal<Job[]>([]);

  private http = inject(HttpClient);

  public getAllJobs(): Signal<Job[]> {
    this.http.get<Job[]>(this.GET_ALL_JOBS)
      .subscribe(data => {
        this.jobsSignal.set(data);
      });

    return this.jobsSignal.asReadonly();
  }
}
