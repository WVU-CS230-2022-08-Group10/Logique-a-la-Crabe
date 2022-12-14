import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageLayoutComponent } from './account-page/account-page-layout.component';
import { ModuleListPageComponent } from './module-list-page/module-list-page.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { LogicGatesLayoutComponent } from './logic-gates-module/logic-gates/logic-gates-layout/logic-gates-layout.component';
import { TransistorModuleComponent } from './transistor-module/transistor-module.component';
import { BinaryModuleComponent } from './binary-module/binary-module.component';
import { NoiseModuleComponent } from './noise-margins-module/noise-margins.component';

const routes: Routes = [
  { path: 'logic-gates', component: LogicGatesLayoutComponent },
  { path: 'canvas', component: PrimaryPageComponent },
  { path: 'account', component: AccountPageLayoutComponent },
  { path: '', component: ModuleListPageComponent },
  { path: 'transistors', component: TransistorModuleComponent },
  { path: 'binary-numbers', component: BinaryModuleComponent },
  { path: 'noise-margins', component: NoiseModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
