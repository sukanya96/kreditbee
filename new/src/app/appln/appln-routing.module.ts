import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplnPage } from './appln.page';

const routes: Routes = [
  {
    path: '',
    component: ApplnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplnPageRoutingModule {}
