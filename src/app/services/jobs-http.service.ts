import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../models/job.model";
import {Observable} from "rxjs";
import {JobDetails} from "../models/job-details.model";

@Injectable({
  providedIn: 'root'
})
export class JobsHttpService {

  private BASE_URL = 'http://localhost:4200';
  private GET_JOBS = this.BASE_URL + '/jobs';

  private http = inject(HttpClient);

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.GET_JOBS);
  }

  public getJobById(jobId: number): Observable<JobDetails> {
    return this.http.get<JobDetails>(`${this.GET_JOBS}/${jobId}`);
  }
}
