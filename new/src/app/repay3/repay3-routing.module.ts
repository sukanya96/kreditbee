import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Repay3Page } from './repay3.page';

const routes: Routes = [
  {
    path: '',
    component: Repay3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Repay3PageRoutingModule {}
