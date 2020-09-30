import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Verify3Page } from './verify3.page';

const routes: Routes = [
  {
    path: '',
    component: Verify3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Verify3PageRoutingModule {}
