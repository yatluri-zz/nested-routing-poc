import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export abstract class RestService<T> {
  constructor(protected http: HttpClient) {}
  getUri(): string {
    return 'assets/json/media.json';
  }

  getMedia(): Observable<T[]> {
    return this.http.get<T[]>(`${this.getUri()}`).pipe(
      map((response: T[]) => {
        return response;
      })
    );
  }
}
