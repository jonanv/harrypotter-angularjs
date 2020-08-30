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

  house: House;
  members: Member[];

  constructor(
    private harrypotterService: HarrypotterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getHouse();
  }

  ngOnInit(): void {
  }

  getHouse() {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');

    this.harrypotterService.getHouse(id)
      .pipe(first())
      .subscribe((response: House) => {
        this.house = response;
        this.members = response.members;
      });
  }

  showCharacter(id: string) {
    this.router.navigate(['/character', id]);
  }

}
