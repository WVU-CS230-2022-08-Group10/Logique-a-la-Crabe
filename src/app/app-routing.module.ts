import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageLayoutComponent } from './account-page/account-page-layout.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { LogicGatesLayoutComponent } from './secondary-page/logic-gates/logic-gates-layout/logic-gates-layout.component';
import { PracticeLayoutComponent } from './secondary-page/practice-examples/practice-layout/practice-layout.component';

const routes: Routes = [
  { path: 'logic-gates', component: LogicGatesLayoutComponent },
  { path: 'practice-examples', component: PracticeLayoutComponent },
  { path: '', component: PrimaryPageComponent },
  { path: 'Account', component: AccountPageLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
