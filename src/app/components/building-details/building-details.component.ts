import { Component, OnInit } from '@angular/core';
import { BuildingService } from 'src/app/services/building.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/models/building.model';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css']
})
export class BuildingDetailsComponent implements OnInit {

  currentBuilding: Building = {
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
  message = '';

  constructor(
    private buildingService: BuildingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBuilding(this.route.snapshot.params.id);
  }

  getBuilding(id: string): void {
    this.buildingService.get(id)
      .subscribe(
        data => {
          this.currentBuilding = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateBuilding(): void {
    this.message = '';

    this.buildingService.update(this.currentBuilding.id, this.currentBuilding)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This building was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteBuilding(): void {
    this.buildingService.delete(this.currentBuilding.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/buildings']);
        },
        error => {
          console.log(error);
        });
  }

}
