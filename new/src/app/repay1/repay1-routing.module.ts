import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay1Page } from './repay1.page';

const routes: Routes = [
  {
    path: '',
    component: Repay1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay1PageRoutingModule {}
