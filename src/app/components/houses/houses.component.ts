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

  houses: Houses[] = [];
  loading: boolean = false;

  constructor(
    private harrypotterService: HarrypotterService,
    private router: Router
  ) {
    this.getHouses();
  }

  ngOnInit(): void {
  }

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

  showHouse(id: string) {
    this.router.navigate(['/house', id])
  }

}
