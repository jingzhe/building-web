import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsListComponent } from './components/buildings-list/buildings-list.component';
import { BuildingDetailsComponent } from './components/building-details/building-details.component';
import { AddBuildingComponent } from './components/add-building/add-building.component';

const routes: Routes = [
  { path: '', redirectTo: 'buildings', pathMatch: 'full' },
  { path: 'buildings', component: BuildingsListComponent },
  { path: 'buildings/:id', component: BuildingDetailsComponent },
  { path: 'add', component: AddBuildingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
