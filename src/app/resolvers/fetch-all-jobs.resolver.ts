import { ResolveFn } from '@angular/router';
import {Job} from "../models/job.model";
import {JobsHttpService} from "../services/jobs-http.service";
import {inject, Signal} from "@angular/core";

export const fetchAllJobsResolver: ResolveFn<Signal<Job[]>> = (route, state) =>
  inject(JobsHttpService).getAllJobs();
