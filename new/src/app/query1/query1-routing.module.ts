import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Query1Page } from './query1.page';

const routes: Routes = [
  {
    path: '',
    component: Query1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Query1PageRoutingModule {}
