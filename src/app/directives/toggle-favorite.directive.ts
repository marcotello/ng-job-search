import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {FavoritesService} from "../services/favorites.service";
import {JobId} from "../types/types";

@Directive({
  selector: '[appToggleFavorite]',
  standalone: true
})
export class ToggleFavoriteDirective implements OnInit  {

  @Input({required: true, alias: 'appToggleFavorite'})
  jobId!: JobId;

  constructor(private favoritesService: FavoritesService, private el: ElementRef) {}

  ngOnInit(): void {
    this.toggleStyle();
  }

  @HostListener('click')
  onClick():void {
    this.favoritesService.toggleFavorite(this.jobId);
    this.toggleStyle();
  }

  private toggleStyle(): void {
    this.el.nativeElement.style.backgroundColor =
      this.favoritesService.favorites().includes(this.jobId) ? 'yellow' : 'grey';
  }
}
