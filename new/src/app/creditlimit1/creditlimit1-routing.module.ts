import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creditlimit1Page } from './creditlimit1.page';

const routes: Routes = [
  {
    path: '',
    component: Creditlimit1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creditlimit1PageRoutingModule {}
