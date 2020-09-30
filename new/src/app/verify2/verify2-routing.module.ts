import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verify2Page } from './verify2.page';

const routes: Routes = [
  {
    path: '',
    component: Verify2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verify2PageRoutingModule {}
