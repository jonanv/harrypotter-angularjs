import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../services/harrypotter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(
    private harrypotterService: HarrypotterService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getCharacter();
  }

  ngOnInit(): void {
  }

  getCharacter() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');

    this.harrypotterService.getCharacter(id)
      .pipe(first())
      .subscribe((response: Character) => {
        this.character = response;
      });
  }

  backHouse() {
    const house = this.ActivatedRoute.snapshot.paramMap.get('house');
    this.router.navigate(['house/', house]);
  }

}
