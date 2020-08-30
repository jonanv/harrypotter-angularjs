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

  // Arreglo de tipo Character
  character: Character;
  // Variable loading
  loading: boolean = false;

  constructor(
    private harrypotterService: HarrypotterService, // Injeccion del servicio HarryPotter
    private activatedRoute: ActivatedRoute, // Injeccion del servicio que permite caputar parametros que son enviados en la URL
    private router: Router // Injeccion del servicio router para redireccionar a otras secciones
  ) {
    // Llamado al metodo local de obtener casa
    this.getCharacter();
  }

  ngOnInit(): void {
  }

  // Metodo local obtener un personaje que llama al metodo del servicio HarryPotter y envia como parametro el id
  // del personaje seleccionado que es capturado por medio de activateRoute
  getCharacter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loading = true;

    this.harrypotterService.getCharacter(id)
      .pipe(first())
      .subscribe((response: Character) => {
        this.character = response;
        this.loading = false;
      });
  }

  // Metodo local que vuelva atras y permite identificar si en la URL tiene la variable house que es el id
  // de la casa, si el pametro es nulo redirecciona a la seccion personaje
  // y si tiene el parametro redirecciona a la seccion casa
  backHouse() {
    const house = this.activatedRoute.snapshot.paramMap.get('house');
    if(house === null) {
      this.router.navigate(['characters/']);
    }
    else {
      this.router.navigate(['house/', house]);
    }
  }

}
