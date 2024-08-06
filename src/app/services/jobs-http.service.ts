import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../models/job.model";
import {Observable} from "rxjs";
import {JobDetails} from "../models/job-details.model";

@Injectable({
  providedIn: 'root'
})
export class JobsHttpService {

  private GET_JOBS_URL = '/jobs';

  private http = inject(HttpClient);

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.GET_JOBS_URL);
  }

  public getJobById(jobId: number): Observable<JobDetails> {
    return this.http.get<JobDetails>(`${this.GET_JOBS_URL}/${jobId}`);
  }
}
