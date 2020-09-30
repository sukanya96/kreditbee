import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WritemsgPage } from './writemsg.page';

const routes: Routes = [
  {
    path: '',
    component: WritemsgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WritemsgPageRoutingModule {}
