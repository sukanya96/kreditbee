import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExmPage } from './exm.page';

const routes: Routes = [
  {
    path: '',
    component: ExmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExmPageRoutingModule {}
