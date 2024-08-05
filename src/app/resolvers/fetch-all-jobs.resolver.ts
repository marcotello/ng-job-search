import { ResolveFn } from '@angular/router';
import {Job} from "../models/job.model";
import {JobsHttpService} from "../services/jobs-http.service";
import {inject, Signal} from "@angular/core";
import {JobsService} from "../services/jobs.service";

export const fetchAllJobsResolver: ResolveFn<Signal<Job[]>> = (route, state) =>
  inject(JobsService).getJobs();
