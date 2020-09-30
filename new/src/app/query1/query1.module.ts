import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Query1PageRoutingModule } from './query1-routing.module';

import { Query1Page } from './query1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Query1PageRoutingModule
  ],
  declarations: [Query1Page]
})
export class Query1PageModule {}
