import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { BuildingService } from 'src/app/services/building.service';

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.css']
})
export class BuildingsListComponent implements OnInit {

  buildings?: Building[];
  currentBuilding: Building = {};
  currentIndex = -1;
  name = '';
  city = '';
  street = '';
  limit = 100;
  offset = 0;
  sortBy = '';
  order = 'asc'

  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
    this.retrieveBuildings();
  }

  retrieveBuildings(): void {
    this.buildingService.getAll()
      .subscribe(
        data => {
          this.buildings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBuildings();
    this.currentBuilding = {};
    this.currentIndex = -1;
  }

  setActiveBuilding(building: Building, index: number): void {
    this.currentBuilding = building;
    this.currentIndex = index;
  }

  search(): void {
    this.currentBuilding = {};
    this.currentIndex = -1;

    this.buildingService.findBy(this.name, this.city, this.street, this.limit, this.offset, this.sortBy, this.order)
      .subscribe(
        data => {
          this.buildings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
