import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './nav-bars/main-header/main-header.component';
import { MainFooterComponent } from './nav-bars/main-footer/main-footer.component';
import { GateInfoCardComponent } from './secondary-page/logic-gates/gate-info-card/gate-info-card.component';
import { LogicGatesLayoutComponent } from './secondary-page/logic-gates/logic-gates-layout/logic-gates-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    GateInfoCardComponent,
    LogicGatesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
