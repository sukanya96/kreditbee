import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dis4Page } from './dis4.page';

const routes: Routes = [
  {
    path: '',
    component: Dis4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dis4PageRoutingModule {}
