import { Component, OnInit } from '@angular/core';

import { HarrypotterService } from '../../services/harrypotter.service';
import { first } from 'rxjs/operators';
import { House } from '../../interfaces/house.interface';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: House[] = [];

  constructor(
    private harrypotterService: HarrypotterService
  ) {
    this.getHouses();
  }

  ngOnInit(): void {
  }

  getHouses() {
    this.harrypotterService.getHouses()
      .pipe(first())
      .subscribe((response: House[]) => {
        console.log(response);
        this.houses = response;
      });
  }

}
