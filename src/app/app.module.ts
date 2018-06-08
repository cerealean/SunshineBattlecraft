import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuresComponent } from './components/structures/structures.component';
import { UnitsComponent } from './components/units/units.component';
import { UserCurrencyDisplayComponent } from './components/user-currency-display/user-currency-display.component';
import { TimeUntilComponent } from './components/time-until/time-until.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuresComponent,
    UnitsComponent,
    UserCurrencyDisplayComponent,
    TimeUntilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
