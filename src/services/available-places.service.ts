import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AvailablePlacesService {

  constructor(private http: HttpClient) { }


  private jsonUrl = './assets/json/db.json';

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
