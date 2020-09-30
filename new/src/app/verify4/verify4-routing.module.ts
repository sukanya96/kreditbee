import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verify4Page } from './verify4.page';

const routes: Routes = [
  {
    path: '',
    component: Verify4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verify4PageRoutingModule {}
