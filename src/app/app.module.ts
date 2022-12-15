import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './nav-bars/main-header/main-header.component';
import { MainFooterComponent } from './nav-bars/main-footer/main-footer.component';
import { GateInfoCardComponent } from './logic-gates-module/logic-gates/gate-info-card/gate-info-card.component';
import { LogicGatesLayoutComponent } from './logic-gates-module/logic-gates/logic-gates-layout/logic-gates-layout.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { GatesComponent } from './primary-page/menu-gates/gates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountPageLayoutComponent } from './account-page/account-page-layout.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { ModuleListPageComponent } from './module-list-page/module-list-page.component';
import { TransistorModuleComponent } from './transistor-module/transistor-module.component';
import { BinaryModuleComponent } from './binary-module/binary-module.component';
import { LogicGatesPracticeComponent } from "./logic-gates-module/practice-layout/practice.component";
import { NoiseModuleComponent } from './noise-margins-module/noise-margins.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    GateInfoCardComponent,
    LogicGatesLayoutComponent,
    PrimaryPageComponent,
    GatesComponent,
    AccountPageLayoutComponent,
    ModuleListPageComponent,
    TransistorModuleComponent,
    BinaryModuleComponent,
    LogicGatesPracticeComponent,
    NoiseModuleComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule
  ]
})
export class AppModule { }
