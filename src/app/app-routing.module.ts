import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuresComponent } from './components/structures/structures.component';
import { UnitsComponent } from './components/units/units.component';
import { ResearchComponent } from './components/research/research.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CallbackComponent } from './components/callback/callback.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticatedUserGuard } from './authenticated-user.guard';

const routes: Routes = [
  { path: 'structures', component: StructuresComponent, canActivate: [AuthenticatedUserGuard] },
  { path: 'units', component: UnitsComponent, canActivate: [AuthenticatedUserGuard] },
  { path: 'research', component: ResearchComponent, canActivate: [AuthenticatedUserGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthenticatedUserGuard] },
  { path: 'callback', component: CallbackComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthenticatedUserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
