import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { BuildingService } from 'src/app/services/building.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {

  building: Building = {
    id: '',
    name: '',
    street: '',
    number: 0,
    post_code: '',
    city: '',
    country: '',
    longitude: 0,
    latitude: 0,
    description: ''
  };
  submitted = false;

  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
  }

  saveBuilding(): void {
    const data = [
      {
        name: this.building.name,
        street: this.building.street,
        number: this.building.number,
        post_code: this.building.post_code,
        city: this.building.city,
        country: this.building.country,
        description: this.building.description
      }
    ];

    this.buildingService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBuilding(): void {
    this.submitted = false;
    this.building = {
      id: '',
      name: '',
      street: '',
      number: 0,
      post_code: '',
      city: '',
      country: '',
      longitude: 0,
      latitude: 0,
      description: ''
    };
  }
}
