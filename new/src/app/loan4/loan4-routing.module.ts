import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loan4Page } from './loan4.page';

const routes: Routes = [
  {
    path: '',
    component: Loan4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loan4PageRoutingModule {}
