import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay8Page } from './repay8.page';

const routes: Routes = [
  {
    path: '',
    component: Repay8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay8PageRoutingModule {}
