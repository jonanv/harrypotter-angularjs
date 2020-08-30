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

  constructor(
    private harrypotterService: HarrypotterService,
    private router: Router
  ) {
    this.getCharacters();
  }

  ngOnInit(): void {
  }

  getCharacters() {
    this.harrypotterService.getCharacters()
      .pipe(first())
      .subscribe((response: Characters[]) => {
        this.characters = response;
      });
  }

  showCharacter(id: string) {
    this.router.navigate(['/character', id]);
  }

}
