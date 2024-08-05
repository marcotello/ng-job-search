import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../models/job.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobsHttpService {

  private BASE_URL = 'http://localhost:4200';
  private GET_ALL_JOBS = this.BASE_URL + '/jobs';

  private http = inject(HttpClient);

  public getJobsFromAPI(): Observable<Job[]> {
    return this.http.get<Job[]>(this.GET_ALL_JOBS);
  }
}
