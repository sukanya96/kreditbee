import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creditlimit2Page } from './creditlimit2.page';

const routes: Routes = [
  {
    path: '',
    component: Creditlimit2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creditlimit2PageRoutingModule {}
