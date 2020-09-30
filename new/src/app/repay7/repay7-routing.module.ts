import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay7Page } from './repay7.page';

const routes: Routes = [
  {
    path: '',
    component: Repay7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay7PageRoutingModule {}
