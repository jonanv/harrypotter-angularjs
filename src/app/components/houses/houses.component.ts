import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../services/harrypotter.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: any[] = [];

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
      .subscribe((response: any[]) => {
        this.houses = response;
      });
  }

}
