import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay6Page } from './repay6.page';

const routes: Routes = [
  {
    path: '',
    component: Repay6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay6PageRoutingModule {}
