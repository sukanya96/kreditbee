import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Legal1Page } from './legal1.page';

const routes: Routes = [
  {
    path: '',
    component: Legal1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Legal1PageRoutingModule {}
