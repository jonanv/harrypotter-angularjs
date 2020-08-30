import { Component, OnInit } from '@angular/core';

import { HarrypotterService } from '../../services/harrypotter.service';
import { first } from 'rxjs/operators';
import { Houses } from '../../interfaces/house.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  // Arreglo de tipo Houses
  houses: Houses[] = [];
  // Variable loading
  loading: boolean = false;

  constructor(
    private harrypotterService: HarrypotterService, // Injeccion del servicio HarryPotter
    private router: Router // Injeccion del servicio router para redireccionar a otras secciones
  ) {
    // Llamado al metodo local de obtener casas
    this.getHouses();
  }

  ngOnInit(): void {
  }

  // Metodo local obtener casas que llama al metodo del servicio HarryPotter
  getHouses() {
    this.loading = true;
    this.harrypotterService.getHouses()
      .pipe(first())
      .subscribe((response: Houses[]) => {
        // console.log(response);
        this.houses = response;
        this.loading = false;
      });
  }

  // Metodo local que redirecciona a la seccion house y que recibe como parametro un id de una casa
  showHouse(id: string) {
    this.router.navigate(['/house', id])
  }

}
