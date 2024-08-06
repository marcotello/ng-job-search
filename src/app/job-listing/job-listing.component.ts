import {Component, input} from '@angular/core';
import {ToggleFavoriteDirective} from "../directives/toggle-favorite.directive";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [
    ToggleFavoriteDirective,
    NgIf,
    RouterLink
  ],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss'
})
export class JobListingComponent {

  jobId = input.required<number>();
  imageURL = input.required<string>();
  title = input.required<string>();
  companyName = input.required<string>();
  reference = input.required<string>();
  showStar = input.required<boolean>();
}
