import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './nav-bars/main-header/main-header.component';
import { MainFooterComponent } from './nav-bars/main-footer/main-footer.component';
import { GateInfoCardComponent } from './secondary-page/logic-gates/gate-info-card/gate-info-card.component';
import { LogicGatesLayoutComponent } from './secondary-page/logic-gates/logic-gates-layout/logic-gates-layout.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { GatesComponent } from './primary-page/gates/gates.component';
import { PracticeLayoutComponent } from './secondary-page/practice-examples/practice-layout/practice-layout.component';
import { PracticeCardComponent } from './secondary-page/practice-examples/practice-card/practice-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    GateInfoCardComponent,
    LogicGatesLayoutComponent,
    PrimaryPageComponent,
    GatesComponent,
    PracticeLayoutComponent,
    PracticeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
