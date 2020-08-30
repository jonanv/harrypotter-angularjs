import { Component, OnInit } from '@angular/core';

import { HarrypotterService } from '../../services/harrypotter.service';
import { first } from 'rxjs/operators';
import { House, Member } from '../../interfaces/house.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  // Arreglo de tipo House
  house: House;
  // Arreglo de tipo Member
  members: Member[];
  // Variable loading
  loading: boolean = false;

  constructor(
    private harrypotterService: HarrypotterService, // Injeccion del servicio HarryPotter
    private activatedRoute: ActivatedRoute, // Injeccion del servicio que permite caputar parametros que son enviados en la URL
    private router: Router // Injeccion del servicio router para redireccionar a otras secciones
  ) {
    // Llamado al metodo local de obtener casa
    this.getHouse();
  }

  ngOnInit(): void {
  }

  // Metodo local obtener una casa que llama al metodo del servicio HarryPotter y envia como parametro el id
  // de la casa seleccionada que es capturado por medio de activateRoute
  getHouse() {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.loading = true;

    this.harrypotterService.getHouse(id)
      .pipe(first())
      .subscribe((response: House) => {
        this.house = response;
        this.members = response.members;
        this.loading = false;
      });
  }

  // Metodo local que redirecciona a la seccion character y que recibe como parametro un id de casa y id de un personaje
  showCharacter(house: string, id: string) {
    this.router.navigate(['/character', house, id]);
  }

}
