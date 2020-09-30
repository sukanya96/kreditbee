import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loan3Page } from './loan3.page';

const routes: Routes = [
  {
    path: '',
    component: Loan3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loan3PageRoutingModule {}
