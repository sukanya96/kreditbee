import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Legal3Page } from './legal3.page';

const routes: Routes = [
  {
    path: '',
    component: Legal3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Legal3PageRoutingModule {}
