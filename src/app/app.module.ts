import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuresComponent } from './structures/structures.component';
import { UnitsComponent } from './units/units.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuresComponent,
    UnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
