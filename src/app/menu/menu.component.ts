import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    UpperCasePipe,
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
