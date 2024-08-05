import {Component, input} from '@angular/core';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss'
})
export class JobListingComponent {

  imageURL = input.required<string>();
  title = input.required<string>();
  companyName = input.required<string>();
  reference = input.required<string>();

}
