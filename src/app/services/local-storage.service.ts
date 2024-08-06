import { Injectable } from '@angular/core';
import {JobIds} from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly key = 'angular-favorite-jobs';

  set(jobIds: JobIds): void {
    localStorage.setItem(this.key, JSON.stringify(jobIds));
  }

  get(): JobIds {
    let value = localStorage.getItem(this.key) ?? '[]';
    return JSON.parse(value) as JobIds;
  }
}
