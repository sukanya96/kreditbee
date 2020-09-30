import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dis3Page } from './dis3.page';

const routes: Routes = [
  {
    path: '',
    component: Dis3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dis3PageRoutingModule {}
