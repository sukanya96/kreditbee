import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loan2Page } from './loan2.page';

const routes: Routes = [
  {
    path: '',
    component: Loan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loan2PageRoutingModule {}
