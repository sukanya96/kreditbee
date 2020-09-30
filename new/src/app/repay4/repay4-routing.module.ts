import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay4Page } from './repay4.page';

const routes: Routes = [
  {
    path: '',
    component: Repay4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay4PageRoutingModule {}
