import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisbursalPage } from './disbursal.page';

const routes: Routes = [
  {
    path: '',
    component: DisbursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisbursalPageRoutingModule {}
