import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexiPage } from './flexi.page';

const routes: Routes = [
  {
    path: '',
    component: FlexiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexiPageRoutingModule {}
