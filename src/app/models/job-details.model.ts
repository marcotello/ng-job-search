import {Job} from "./job.model";

export interface JobDetails extends Job {
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: string;
}
