import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay2Page } from './repay2.page';

const routes: Routes = [
  {
    path: '',
    component: Repay2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay2PageRoutingModule {}
