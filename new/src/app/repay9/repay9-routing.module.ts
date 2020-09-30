import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay9Page } from './repay9.page';

const routes: Routes = [
  {
    path: '',
    component: Repay9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay9PageRoutingModule {}
