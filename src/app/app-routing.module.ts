import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogicGatesLayoutComponent } from './secondary-page/logic-gates/logic-gates-layout/logic-gates-layout.component';

const routes: Routes = [
  {path: 'logic-gates', component: LogicGatesLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
