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

  // Llave que es obligatoria en cada consulta y enviada como parametro
  private key: string = '$2a$10$cjtm5hVKpQ.sBMnqoE8Q1uN2JaDptzcFHqP/7IQtoDp5HJMze1Hu6';

  constructor(
    private http: HttpClient
  ) {

  }

  // Metodo general que obtiene las consultas de acuerdo a los parametros
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

  // Metodo que obtiene las casas
  getHouses() {
    return this.getQuery('houses')
      .pipe(map((response: Houses[]) => {
        return response;
      }));
  }

  // Metodo que obtiene una casa por id
  getHouse(id: string) {
    return this.getQuery('houses/', id)
      .pipe(map((response: House) => {
        return response[0];
      }));
  }

  // Metodo que obtiene los personajes
  getCharacters() {
    return this.getQuery('characters')
      .pipe(map((response: Characters[]) => {
        return response;
      }));
  }

  // Metodo que obtiene un personaje por id
  getCharacter(id: string) {
    return this.getQuery('characters/', id)
      .pipe(map((response: Character) => {
        return response;
      }));
  }

  // Metodo que obtiene los hechizos
  getSpells() {
    return this.getQuery('spells')
      .pipe(map((response: Spells[]) => {
        return response;
      }));
  }
}
