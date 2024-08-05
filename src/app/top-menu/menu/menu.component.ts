import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
    imports: [
        RouterLink,
        UpperCasePipe
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
