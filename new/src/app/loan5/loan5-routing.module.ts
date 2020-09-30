import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loan5Page } from './loan5.page';

const routes: Routes = [
  {
    path: '',
    component: Loan5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loan5PageRoutingModule {}
