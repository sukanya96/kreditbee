import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay5Page } from './repay5.page';

const routes: Routes = [
  {
    path: '',
    component: Repay5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay5PageRoutingModule {}
