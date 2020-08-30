import { Component, OnInit } from '@angular/core';

import { HarrypotterService } from '../../services/harrypotter.service';
import { first } from 'rxjs/operators';
import { Characters } from '../../interfaces/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // Arreglo de tipo Characters
  characters: Characters[] = [];
  // Variable loading
  loading: boolean = false;
  // Arreglo house
  house = [
    'Gryffindor',
    'Ravenclaw',
    'Hufflepuff',
    'Slytherin'
  ];
  // Arreglo bloodStatus
  bloodStatus = [
    'half-blood',
    'unknown',
    'pure-blood',
    'muggle',
    'quarter-villa',
    'squib',
    'muggle-born',
    'half-giant'
  ];

  constructor(
    private harrypotterService: HarrypotterService, // Injeccion del servicio HarryPotter
    private router: Router // Injeccion del servicio router para redireccionar a otras secciones
  ) {
    // Llamado al metodo local de obtener personajes
    this.getCharacters();
  }

  ngOnInit(): void {
  }

  // Metodo local obtener personajes que llama al metodo del servicio HarryPotter
  getCharacters() {
    this.loading = true;
    this.harrypotterService.getCharacters()
      .pipe(first())
      .subscribe((response: Characters[]) => {
        this.characters = response;
        this.loading = false;
      });
  }

  // Metodo local que redirecciona a la seccion personaje y que recibe como parametro un id de un personaje
  showCharacter(id: string) {
    this.router.navigate(['/character', id]);
  }

}
