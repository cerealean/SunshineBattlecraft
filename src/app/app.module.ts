import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuresComponent } from './components/structures/structures.component';
import { UnitsComponent } from './components/units/units.component';
import { UserCurrencyDisplayComponent } from './components/user-currency-display/user-currency-display.component';
import { TimeUntilComponent } from './components/time-until/time-until.component';
import { GroupByPipe } from './group-by.pipe';
import { PlayerControllerService } from './services/player-controller.service';
import { TickerService } from './services/ticker.service';
import { OrderByPipe } from './order-by.pipe';
import { ResearchComponent } from './components/research/research.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotifierService } from './notifier.service';
import { StorageService } from './storage.service';
import { CallbackComponent } from './components/callback/callback.component';
import { LogoutComponent } from './logout/logout.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuresComponent,
    UnitsComponent,
    UserCurrencyDisplayComponent,
    TimeUntilComponent,
    GroupByPipe,
    OrderByPipe,
    ResearchComponent,
    SettingsComponent,
    CallbackComponent,
    LogoutComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PlayerControllerService, TickerService, NotifierService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
