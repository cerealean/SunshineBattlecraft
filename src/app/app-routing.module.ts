import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuresComponent } from './components/structures/structures.component';
import { UnitsComponent } from './components/units/units.component';
import { ResearchComponent } from './components/research/research.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path: 'structures', component: StructuresComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
