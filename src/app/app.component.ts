import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./top-menu/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private http = inject(HttpClient);

  title = 'ng-job-search';

  ngOnInit(): void {
    this.http.get('/jobs').subscribe(data => {
      console.log(data);
    });
  }
}
