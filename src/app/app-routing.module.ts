import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageLayoutComponent } from './account-page/account-page-layout.component';
import { ModuleListPageComponent } from './module-list-page/module-list-page.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { LogicGatesLayoutComponent } from './logic-gates-module/logic-gates/logic-gates-layout/logic-gates-layout.component';
import { TransistorModuleComponent } from './transistor-module/transistor-module.component';
import { LogicGatesPracticeComponent } from './logic-gates-module/practice-layout/practice.component';

const routes: Routes = [
  { path: 'logic-gates', component: LogicGatesLayoutComponent },
  { path: 'logic-gates/practice', component: LogicGatesPracticeComponent },
  { path: '', component: PrimaryPageComponent },
  { path: 'Account', component: AccountPageLayoutComponent },
  { path: 'Modules', component: ModuleListPageComponent },
  { path: 'Transistors', component: TransistorModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
