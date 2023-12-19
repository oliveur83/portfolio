import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sharedValue: string = 'profil';

  getSharedValue(): string {
    return this.sharedValue;
  }

  setSharedValue(value: string): void {
    this.sharedValue = value;
  }
}
