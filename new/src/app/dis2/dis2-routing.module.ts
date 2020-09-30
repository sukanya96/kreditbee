import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dis2Page } from './dis2.page';

const routes: Routes = [
  {
    path: '',
    component: Dis2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dis2PageRoutingModule {}
