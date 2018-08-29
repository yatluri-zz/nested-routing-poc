import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  backgroundImageUrl: string;
  constructor() {}
  setBackGroundImage(url: string) {
    this.backgroundImageUrl = url;
  }
  getBackGroundImageUrl(): string {
    return this.backgroundImageUrl;
  }
}
