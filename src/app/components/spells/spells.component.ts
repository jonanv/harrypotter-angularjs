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

  // Arreglo de tipo Spells
  spells: Spells[] = [];
  // Variable loading
  loading: boolean = false;
  // Arreglo hechizo
  type = [
    'Charm',
    'Enchantment',
    'Spell',
    'Hex',
    'Curse',
    'Jinx'
  ];

  constructor(
    private harrypotterService: HarrypotterService // Injeccion del servicio HarryPotter
  ) {
    // Llamado al metodo local de obtener hechizos
    this.getSpells();
  }

  ngOnInit(): void {
  }

  // Metodo local obtener hechizos que llama al metodo del servicio HarryPotter
  getSpells() {
    this.loading = true;
    this.harrypotterService.getSpells()
      .pipe(first())
      .subscribe((response: Spells[]) => {
        this.spells = response;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

}
