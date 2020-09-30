import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Legal2Page } from './legal2.page';

const routes: Routes = [
  {
    path: '',
    component: Legal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Legal2PageRoutingModule {}
