import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuresComponent } from './structures/structures.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  {path: 'structures', component: StructuresComponent},
  {path: 'units', component: UnitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
