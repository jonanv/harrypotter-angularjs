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

  characters: Characters[] = [];
  loading: boolean = false;
  house = [
    'Gryffindor',
    'Ravenclaw',
    'Hufflepuff',
    'Slytherin'
  ];
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
    private harrypotterService: HarrypotterService,
    private router: Router
  ) {
    this.getCharacters();
  }

  ngOnInit(): void {
  }

  getCharacters() {
    this.loading = true;
    this.harrypotterService.getCharacters()
      .pipe(first())
      .subscribe((response: Characters[]) => {
        this.characters = response;
        this.loading = false;
      });
  }

  showCharacter(id: string) {
    this.router.navigate(['/character', id]);
  }

}
