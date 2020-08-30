import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../services/harrypotter.service';
import { Spells } from '../../interfaces/spell.interface';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  spells: Spells[] = [];

  constructor(
    private harrypotterService: HarrypotterService
  ) {
    this.getSpells();
  }

  ngOnInit(): void {
  }

  getSpells() {
    this.harrypotterService.getSpells()
      .pipe(first())
      .subscribe((response: Spells[]) => {
        console.log(response);
        this.spells = response;
      });
  }

}
