import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { House } from '../interfaces/house.interface';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  private key: string = '$2a$10$cjtm5hVKpQ.sBMnqoE8Q1uN2JaDptzcFHqP/7IQtoDp5HJMze1Hu6';

  constructor(
    private http: HttpClient
  ) { }

  private getQuery(query: string) {
    const url = `${ environment.apiUrl }${ query }?key=${ this.key }`;

    return this.http.get(url);
  }

  getHouses() {
    return this.getQuery('houses')
      .pipe(map((response: House[]) => {
        return response;
      }));
  }
}
