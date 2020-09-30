import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Help2Page } from './help2.page';

const routes: Routes = [
  {
    path: '',
    component: Help2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Help2PageRoutingModule {}
