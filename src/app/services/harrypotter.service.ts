import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { House, Houses } from '../interfaces/house.interface';
import { Character, Characters } from '../interfaces/character.interface';
import { Spells } from '../interfaces/spell.interface';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  private key: string = '$2a$10$cjtm5hVKpQ.sBMnqoE8Q1uN2JaDptzcFHqP/7IQtoDp5HJMze1Hu6';

  constructor(
    private http: HttpClient
  ) {

  }

  private getQuery(query: string, id?: string) {
    let url = '';
    if (id === undefined) {
      url = `${ environment.apiUrl }${ query }?key=${ this.key }`;
    }
    else {
      url = `${ environment.apiUrl }${ query }${ id }?key=${ this.key }`;
    }
    return this.http.get(url);
  }

  getHouses() {
    return this.getQuery('houses')
      .pipe(map((response: Houses[]) => {
        return response;
      }));
  }

  getHouse(id: string) {
    return this.getQuery('houses/', id)
      .pipe(map((response: House) => {
        return response[0];
      }));
  }

  getCharacters() {
    return this.getQuery('characters')
      .pipe(map((response: Characters[]) => {
        return response;
      }));
  }

  getCharacter(id: string) {
    return this.getQuery('characters/', id)
      .pipe(map((response: Character) => {
        return response;
      }));
  }

  getSpells() {
    return this.getQuery('spells')
      .pipe(map((response: Spells[]) => {
        return response;
      }));
  }
}
