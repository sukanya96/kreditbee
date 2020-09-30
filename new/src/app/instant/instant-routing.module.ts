import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstantPage } from './instant.page';

const routes: Routes = [
  {
    path: '',
    component: InstantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstantPageRoutingModule {}
