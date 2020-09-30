import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loan1Page } from './loan1.page';

const routes: Routes = [
  {
    path: '',
    component: Loan1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loan1PageRoutingModule {}
